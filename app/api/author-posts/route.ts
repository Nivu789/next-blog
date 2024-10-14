import prisma from "@/prisma/db"
import { NextResponse } from "next/server"

export async function GET(){
    try {
        const blogsPosts = await prisma.blog.findMany({
            orderBy:{
                createdAt:"desc"
            }
        })

        if(blogsPosts){
            return NextResponse.json({blogsPosts})
        }else{
            return NextResponse.json({success:false,message:"couldn't find any posts"})
        }
    } catch (error) {
        console.log(error)
    }
}