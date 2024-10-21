"use server"



import { auth } from "@/auth"
import prisma from "@/prisma/db"
import { S3Client } from '@aws-sdk/client-s3'
import {createPresignedPost} from '@aws-sdk/s3-presigned-post'
import {nanoid} from 'nanoid'


export async function manageBlogImageUpload(formData:FormData){
    try {
        const client = new S3Client({
            region:process.env.AWS_REGION
        })

        const key = nanoid()
        
        const {url,fields} = await createPresignedPost(client,{
            Bucket:process.env.AWS_BUCKET_NAME || "",
            Key:key
        })

        const formDataS3 = new FormData()
        Object.entries(fields).forEach(([key,value])=>{
            formDataS3.append(key,value)
        })

        formDataS3.append("file",formData.get("image") as string)

        const response = await fetch(url,{
            method:"POST",
            body:formDataS3
        })

        const textresponse = response.text()

        console.log(textresponse)

        const imageUrl = url+key

        if(response.ok){
            return {success:true,imageUrl}
        }else{
            return {success:false}
        }

    } catch (error) {
        console.log(error)
    }
}

export async function createBlog(title:string,category:string,subTitle:string,content:string,image:string){
    const session = await auth()
    const userId = parseInt(session?.user?.id||"")
    console.log("Name",session?.user?.name)
    console.log(image)
    try {
        const blog = await prisma.blog.create({
            data:{
                userId,
                userName:session?.user?.name,
                userImage:session?.user?.image,
                title,
                topic:category,
                subTitle,
                thumbnail:image,
                content
            }
        })

        if(blog){
            const categoryExist = await prisma.category.findUnique({
                where:{
                    categoryName:category
                }
            })

            if(categoryExist){
                categoryExist.blogPosts+=1
            }else{
                await prisma.category.create({
                    data:{
                        categoryName:category,
                        blogPosts:1
                    }
                })
            }

            return {success:true,message:"Created you new blog post"}
        }

        return {success:false,message:"Sorry, we coudn't make it"}
    } catch (error) {
        console.log(error)
    }
}

export async function editBlog(blogId:number,title:string,category:string,subTitle:string,image:string,content:string){
    try {
        
        console.log("image",image)
        const existingBlog = await prisma.blog.findUnique({
            where: {
                id: blogId
            }
        });

        let newThumbnail;
        if(existingBlog){
            if(existingBlog.thumbnail=="" && image!==""){
                console.log("no prev image and new image is there")
                newThumbnail = image
            }

            else if(existingBlog.thumbnail!="" && image==""){
                console.log("prev image is there and new image is not there")
                newThumbnail = existingBlog.thumbnail
            }

            else if(existingBlog.thumbnail!=="" && image!==""){
                console.log("prev image is there and new image is there")
                newThumbnail = image
            }else{
                console.log("in else")
            }

            // newThumbnail = existingBlog.thumbnail === "" && image !== "" ? image : existingBlog.thumbnail !== "" && image !== "" ? image : existingBlog.thumbnail!="" && image=="" && existingBlog.thumbnail;
        }
        
        const editedBlog = await prisma.blog.update({
            where: {
                id: blogId
            },
            data: {
                title,
                topic: category,
                subTitle,
                content,
                thumbnail: newThumbnail
            }
        });


        if(editedBlog){
            return {success:true}
        }else{
            return {success:false}
        }
    } catch (error) {
        console.log(error)
    }
}

export async function deleteBlog(itemId:number){
    try {
        const removeBlog = await prisma.blog.delete({
            where:{
                id:itemId
            }
        })

        if(removeBlog){
            return {success:true}
        }else{
            return {success:false}
        }

    } catch (error) {
        console.log(error)
    }
}


export async function fetchIndiBlog(blogId:string){
    try {
        console.log(blogId)
        const idOfBlog = parseInt(blogId)
        console.log(idOfBlog)
        const blogPost = await prisma.blog.findUnique({
            where:{
                id:idOfBlog
            }
        })

        if(blogPost){
            return {success:true,blogPost}
        }else{
            return {success:false}
        }

    } catch (error) {
        console.log(error)
    }
}

export async function fetchAllBlogs(){
    try {
        const blogs = await prisma.blog.findMany({
            orderBy:{
                createdAt:"desc"
            }
        })
        if(blogs){
            return {success:true,blogs}
        }else{
            return {success:false}
        }
    } catch (error) {
        console.log(error)
    }
}


