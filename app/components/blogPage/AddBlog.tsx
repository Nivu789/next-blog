"use client"

import Container from '../Container'
import React, { useEffect, useState } from 'react'
import { ContentState, Editor } from 'react-draft-wysiwyg';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import './addblog.css'
import { convertFromRaw, convertToRaw, RawDraftContentState } from 'draft-js';
import { EditorState } from 'draft-js';
import { useForm, SubmitHandler } from "react-hook-form"
import { createBlog } from '@/app/actions/blogRelated';
import { Bounce, toast } from 'react-toastify';
import { useRouter } from 'next/navigation';


type Inputs = {
    title: string
}


const AddBlog = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm<Inputs>()


    const [editorState, setEditorState] = useState(
        () => EditorState.createEmpty(),
      );


    const router = useRouter()

    //   useEffect(()=>{
    //     console.log(editorState.getCurrentContent().getPlainText('').length)
    //   },[editorState])

    // useEffect(()=>{
    //     const data = convertToRaw(editorState.getCurrentContent())
    //     const convertedContent = convertFromRaw(data);
    //     setTestEditorState(EditorState.createWithContent(convertedContent));
    // },[editorState])

    const [publishButton,setPublishButton] = useState<boolean>(false)

    const onSubmit: SubmitHandler<Inputs> = async(data) => {
        const content = JSON.stringify(editorState)
        const response = await createBlog(data.title,content)

        if(response?.success){
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
            
        }else{
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

    useEffect(()=>{
        if(editorState.getCurrentContent().getPlainText('').trim().length<=1 || watch("title").trim().length<=1){
            setPublishButton(false)
        }else{
            setPublishButton(true)
        }
    },[editorState,watch("title")])


    return (
        <Container className='pr-44 pl-44 mt-20 flex flex-col gap-4'>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className='flex items-center gap-2'>
                {publishButton && <div>
                    <button className='bg-green-400 rounded-2xl py-1 px-3 text-white' type='submit'>publish</button>
                </div>}
                <div>
                    <input type="text" {...register("title")} placeholder='title' className='py-0 text-5xl border-r-0 border-b-0 border-t-0 title-input' style={{ outline: "none" }} />
                </div>
            </div>
            </form>

            <Editor toolbarClassName="toolbar-class" editorClassName="editor-class" placeholder='Tell your story' editorState={editorState} onEditorStateChange={setEditorState}/>
        </Container>
    )
}

export default AddBlog


