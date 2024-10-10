"use server"

import prisma from "@/prisma/db"

type Inputs = {
    title: string
}

import { auth } from "@/auth"


export async function createBlog(title:string,content:string){
    const session = await auth()
    const userId = parseInt(session?.user.id||"")
    try {
        const blog = await prisma.blog.create({
            data:{
                userId,
                title,
                content
            }
        })
        if(blog){
            return {success:true,message:"Created you new blog post"}
        }

        return {success:false,message:"Sorry, we coudn't make it"}
    } catch (error) {
        console.log(error)
    }
}