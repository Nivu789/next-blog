"use client"

import React from 'react'
import { useParams } from 'next/navigation'
import Container from '../Container'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import AuthorPosts from './AuthorPosts'
import { useSession } from 'next-auth/react'

const AboutAuthor = () => {
    const params = useParams()
    const {userId} = params

    const {data:session} = useSession()

  return (
    <Container className='pl-40 pr-40 mt-16 flex flex-col gap-20'>
        <div className='logo-section flex justify-center flex-col items-center gap-5'>
            <div className='border rounded-full p-3'>
                <Avatar className='w-28 h-28'>
                    <AvatarImage src={session?.user.image || ""} />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>
            <span className='text-3xl font-semibold'>{session?.user.name}</span>
            <div className='px-44 text-center'>Mario, a co-founder of Acme and the content management system Sanity is an accomplished Staff Engineer with a specialization in Frontend at Vercel. Before his current position, he served as a Senior Engineer at Apple.</div>
        </div>

        <div>
            <AuthorPosts/>
        </div>
    </Container>
  )
}

export default AboutAuthor