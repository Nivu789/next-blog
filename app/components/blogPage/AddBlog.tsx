"use client"

import Container from '../Container'
import React, { useEffect, useState } from 'react'
import { Editor } from 'react-draft-wysiwyg';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import './addblog.css'
import { convertToRaw, EditorState } from 'draft-js';
import { useForm, SubmitHandler } from "react-hook-form"
import { createBlog, manageBlogImageUpload } from '@/app/actions/blogRelated';
import { Bounce, toast } from 'react-toastify';
import { useRouter } from 'next/navigation';



type Inputs = {
    title: string
    subtitle:string
    category:string
}


const AddBlog = () => {

    const {
        register,
        handleSubmit,
        watch,
        setValue,
    } = useForm<Inputs>()


    const [editorState, setEditorState] = useState(
        () => EditorState.createEmpty(),
    );

    const [modalOpen, setModalOpen] = useState(false)

    const router = useRouter()

    //   useEffect(()=>{
    //     console.log(editorState.getCurrentContent().getPlainText('').length)
    //   },[editorState])

    // useEffect(()=>{
    //     const data = convertToRaw(editorState.getCurrentContent())
    //     const convertedContent = convertFromRaw(data);
    //     setTestEditorState(EditorState.createWithContent(convertedContent));
    // },[editorState])

    const [publishButton, setPublishButton] = useState<boolean>(false)

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        let imageResponse;
        if(image){
            const formData = new FormData()
            formData.append("image",image)
            imageResponse = await manageBlogImageUpload(formData)
        }
        
        const content = JSON.stringify(convertToRaw(editorState.getCurrentContent()))
        const response = await createBlog(data.title,data.category,data.subtitle, content,imageResponse?.imageUrl || "")

        if (response?.success) {
            toast.success(response?.message, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });

            router.push('/')

        } else {
            toast.error(response?.message, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }
    }

    useEffect(() => {
        if (editorState.getCurrentContent().getPlainText('').trim().length <= 1 || watch("title").trim().length <= 1) {
            setPublishButton(false)
        } else {
            setPublishButton(true)
        }
    }, [editorState, watch("title")])

    const category = watch("category");

    const [prevCategory, setPrevCategory] = useState('');

    const [categoryData,setCategoryData] = useState([])

    const [image,setImage] = useState<File|string>("")

    useEffect(() => {
        
        const handleRequest = async() => {
            if (category !== prevCategory) {
                
                const response = await fetch('/api/get-category', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json', // Specify content type
                    },
                    body: JSON.stringify({ category }), // Send the category as JSON
                });

                if(response.ok){
                    const {data:categoryData} = await response.json()
                    setCategoryData(categoryData)
                }
                // Place your fetch request here
                
                // Update the previous category state
                setPrevCategory(category);
            }
        };

        const timeoutId = setTimeout(handleRequest, 1000);

        // Clear timeout if category changes again before delay
        return () => clearTimeout(timeoutId);
    }, [category, prevCategory]);


    return (
        <Container className='pr-44 pl-44 mt-20 flex flex-col gap-4'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex items-center gap-2'>
                    {publishButton && <div>
                        <button className='bg-green-400 rounded-2xl py-1 px-3 text-white' type='button' onClick={() => setModalOpen(true)}>publish</button>
                    </div>}
                    <div>
                        <input type="text" {...register("title")} placeholder='title' className='py-0 text-5xl border-r-0 border-b-0 border-t-0 title-input' style={{ outline: "none" }} />
                    </div>
                </div>
            

            <Editor toolbarClassName="toolbar-class" editorClassName="editor-class" placeholder='Tell your story' editorState={editorState} onEditorStateChange={setEditorState} />

            {modalOpen && <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

                        <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start flex-col gap-3">
                                    <div className="flex items-center justify-center w-full">
                                        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                                </svg>
                                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">{image ? "Contains " : "Click to upload"}</span>{image ? "1 file" : "or drag and drop"}</p>
                                                <p className="text-xs text-gray-500 dark:text-gray-400">{image ? "Perfect" : "Include a high-quality image in your story to make it more inviting to readers."}</p>
                                            </div>
                                            <input id="dropzone-file" type="file" className="hidden" name="image" onChange={(e)=>setImage(e.target.files ? e.target.files[0] : "")}/>
                                        </label>
                                    </div>
                                    <div className='w-full'>
                                        <input type="text" {...register("subtitle")} placeholder='write a preview subtitle' className='py-0 text-lg title-input w-full border-0 border-b-2' style={{ outline: "none" }} />
                                    </div>

                                    <div className='w-full'>
                                        
                                        <input type="text" {...register("category")} placeholder='add a topic' className='py-0 text-sm title-input w-full border-0 border-b-2' style={{ outline: "none" }} />
                                    </div>
                                    {categoryData.length >= 1 && <div className='w-full flex flex-col gap-1'>
                                        {categoryData.map(({item}:{item:{categoryName:string,id:number}})=>(
                                            <p className='bg-black text-white px-2 rounded-xl py-1' key={item.id} onClick={()=>{
                                                setValue("category",item.categoryName)
                                                setCategoryData([])
                                            }}>
                                            {item.categoryName}
                                            </p>
                                        ))}
                                    </div>}
                                    {/* <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                        <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                                        </svg>
                                    </div> */}
                                    {/* <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                        <h3 className="text-base font-semibold leading-6 text-gray-900" id="">Deactivate account</h3>
                                        <div className="mt-2">
                                            <p className="text-sm text-gray-500">Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone.</p>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                <button type="submit" className="inline-flex w-full justify-center rounded-md bg-green-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">Publish now</button>
                                <button type="button" className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto" onClick={() => setModalOpen(false)}>Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
            </form>
        </Container>
    )
}

export default AddBlog


