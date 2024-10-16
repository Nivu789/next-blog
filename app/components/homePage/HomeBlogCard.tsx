import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import moment from 'moment'
import Link from 'next/link'

interface CardData {
    item: {
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

}

const HomeBlogCard = ({ item }: CardData) => {
    return (
        <Link href={`/blog/${item.id}`} className='col-span-4 flex flex-col gap-6 p-4'>
            <div className='h-52'>
                <img src={item.thumbnail||""} alt="" className='rounded-xl object-cover w-full h-full' />
            </div>
            <div className='text-xl font-semibold'>
                {item.title}
            </div>
            <div>
                {item.subTitle}
            </div>
            <div className='flex justify-between'>
                <div className='flex items-center gap-3'>
                    <Avatar className='w-6 h-6'>
                        <AvatarImage src={item.userImage || ""} />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <span>{item.userName}</span>
                    <span>&#9679;</span>
                    <span>{moment(item.createdAt).format("MMMM Do YYYY")}</span>
                </div>

                <span><Badge variant="outline" className='bg-purple-200 text-purple-500 p-2 rounded-full'>{item.topic}</Badge></span>
            </div>
        
        </Link>
    )
}

export default HomeBlogCard