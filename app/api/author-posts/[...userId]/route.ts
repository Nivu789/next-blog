import prisma from "@/prisma/db"
import { NextRequest, NextResponse } from "next/server"

export async function GET(req:NextRequest,{params}:{params:{userId:string}}){
    try {
        const userId = parseInt(params.userId)
        console.log(params.userId)
        const blogsPosts = await prisma.blog.findMany({
            where:{
                userId
            },
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