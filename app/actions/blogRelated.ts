"use server"

import prisma from "@/prisma/db"

type Inputs = {
    title: string
}

import { auth } from "@/auth"


export async function manageBlogImageUpload(formData:FormData){
    try {
        console.log(formData)
    } catch (error) {
        console.log(error)
    }
}

export async function createBlog(title:string,content:string,image:File|string){
    const session = await auth()
    const userId = parseInt(session?.user.id||"")
    console.log("Name",session?.user.name)
    console.log(image)
    // try {
    //     const blog = await prisma.blog.create({
    //         data:{
    //             userId,
    //             userName:session?.user?.name,
    //             userImage:session?.user.image,
    //             title,
    //             content
    //         }
    //     })
    //     if(blog){
    //         return {success:true,message:"Created you new blog post"}
    //     }

    //     return {success:false,message:"Sorry, we coudn't make it"}
    // } catch (error) {
    //     console.log(error)
    // }
}