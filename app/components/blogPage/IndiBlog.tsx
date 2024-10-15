"use client"

import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Container from '../Container'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from '@/components/ui/button'
import { fetchIndiBlog } from '@/app/actions/blogRelated'
import { Bounce, toast } from 'react-toastify'
import moment from 'moment'
import {Editor, convertFromRaw,EditorState} from 'draft-js';



interface blogPost {
    id: number;
    userId: number;
    userName: string | null;
    userImage: string | null;
    title: string;
    content: string;
    topic: string | null;
    subTitle: string | null;
    thumbnail: string | null;
    createdAt: Date;
}

const IndiBlog = () => {

    const [blogPost, setBlogPost] = useState<blogPost>()
    const [editorContent,setEditorContent] = useState<EditorState>(()=>EditorState.createEmpty())
    const [loading, setLoading] = useState(false)
    const params = useParams()
    const { blogId } = params


    useEffect(() => {
        setLoading(true)
        const fetchBlogPost = async () => {
            
            

            const response = await fetchIndiBlog(blogId)

            if (response?.success) {
                if (response.blogPost) {
                    setBlogPost(response.blogPost)
                    const storedState =  convertFromRaw(JSON.parse(response.blogPost?.content));
                    setEditorContent(EditorState.createWithContent(storedState));
                }
            } else {
                toast.error("Cannot find that post", {
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

            setLoading(false)
        }

        fetchBlogPost()

    }, [blogId])


    return (
        <Container className='mt-20 pr-44 pl-44'>
            {loading ?
                <div role="status" className='flex justify-center'>
                    <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                    </svg>
                    <span className="sr-only">Loading...</span>
                </div>
                :

                <div className='flex flex-col gap-8'>
                <div className='flex justify-center flex-col items-center gap-8'>
                    <span className='p-2 bg-blue-100 rounded-2xl text-blue-700'>{blogPost && blogPost.topic}</span>
                    <h1 className='text-4xl font-bold w-1/2 text-center'>{blogPost && blogPost.title}</h1>
                    <h3>{blogPost?.subTitle}</h3>
                    <div className='grid grid-cols-3 gap-2 items-center'>
                        <Avatar className='w-20 h-20 col-span-1'>
                            <AvatarImage src={blogPost?.userImage || ""} />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div className='col-span-2 flex flex-col'>
                            <span className='text-xl font-semibold'>{blogPost?.userName}</span>
                            <div className='flex gap-1 text-gray-500'>
                                <span>{moment(blogPost?.createdAt).format("MMMM Do YYYY")}</span>
                                <span>&#9679;</span>
                                <span>1 min read</span>
                            </div>

                        </div>
                    </div>

                    <div className='w-full h-[500px]'>
                        <img src={blogPost?.thumbnail || ""} alt="" className='object-cover w-full h-full object-center rounded-xl' />
                    </div>

                    </div>

                    <div className='w-full'>
                        <Editor editorState={editorContent} readOnly={true} onChange={()=>console.log("Change")}/> 
                    </div>

                    <div className='flex flex-col items-center gap-8'>
                    <div>
                        <Button className='p-7 text-lg'>View all posts</Button>
                    </div>

                    <div className='grid grid-cols-4 pr-32 pl-32'>
                        <div className='flex'>
                            <div className='rounded-full p-3 border'>
                                <Avatar className='w-24 h-24 col-span-1'>
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                            </div>
                        </div>

                        <div className='col-span-3 flex flex-col'>
                            <span className='text-xl font-semibold'>Ryna Kenter</span>
                            <div className='flex gap-1 text-gray-500'>
                                Mario, a co-founder of Acme and the content management system Sanity is an accomplished Staff Engineer with a specialization in Frontend at Vercel. Before his current position, he served as a Senior Engineer at Apple.
                            </div>
                        </div>
                    </div>
                    </div>

                </div>
            }

        </Container>
    )
}

export default IndiBlog