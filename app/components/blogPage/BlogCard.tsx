"use client"

import React, { useEffect } from 'react'
import Link from 'next/link'
import { SlOptionsVertical } from "react-icons/sl";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import moment from 'moment'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { useEditBlogId } from '@/app/contexts/EditPageContext';
import { deleteBlog } from '@/app/actions/blogRelated';
import { Bounce, toast } from 'react-toastify';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';


interface blogPosts {
    item: {
        id: number
        userId: number
        title: string
        content: string
        createdAt: Date
        userName: string,
        userImage: string
        thumbnail: string
    }

}


const BlogCard = ({ item }: blogPosts) => {
    
    const {data:session} = useSession()

    const router = useRouter()

    useEffect(()=>{
        router.refresh()
    },[session])

    const {setEditBlogId} = useEditBlogId()

    const handleBlogEdit = (itemId:number) =>{
        setEditBlogId(item.id)
        localStorage.setItem("edit-id",item.id.toString())
    }

    const handleBlogDelete = async(itemId:number) =>{
        const response = await deleteBlog(itemId)
        if(response?.success){
            toast.success("success", {
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

    return (
        <>
        
        <div className='col-span-4 flex flex-col gap-2 p-4 mb-6'>
            <Link href={`/blog/${item.id}`} className='flex flex-col gap-3 mb-6'>
                <div className='w-full h-44'>
                    <img src={item.thumbnail} alt="" className='rounded-xl object-cover h-full w-full' />
                </div>
                <div className='text-xl font-semibold'>
                    {item.title}
                </div>
                <div>
                    In a world filled with constant noise and distractions, the allure of a simpler lifestyle beckons like a soothing whisper.
                </div>
            </Link>
            <div className='flex justify-between'>
                <div className='flex items-center gap-3'>
                    <Avatar className='w-6 h-6'>
                        <AvatarImage src={item.userImage ? item.userImage : "https://github.com/shadcn.png"} />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <span>{item.userName ? item.userName : "unknown"}</span>
                    <span>&#9679;</span>
                    <span>{moment(item.createdAt).format("MMMM Do YYYY")}</span>
                </div>
                {session?.user?.id == item.userId.toString() && <Popover>
                    <PopoverTrigger><SlOptionsVertical /></PopoverTrigger>
                    <PopoverContent className='flex flex-col gap-2'>
                        <Link href={'/edit-blog'}><p className='cursor-pointer' onClick={()=>handleBlogEdit(item.id)}>Edit post</p></Link>
                        <p className='cursor-pointer text-red-600' onClick={()=>handleBlogDelete(item.id)}>Delete post</p>
                    </PopoverContent>
                </Popover>}

                <span><Badge variant="outline" className='bg-purple-200 text-purple-500 p-2 rounded-full'>Health</Badge></span>
            </div>


        </div>

        </>
    )
}

export default BlogCard