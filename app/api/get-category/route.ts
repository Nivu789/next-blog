import prisma from "@/prisma/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest){
    try {
        const {category} = await req.json(); // Read the JSON body
        const data = await prisma.category.findMany({
            where:{
                categoryName:{
                    contains:category
                }
            }
        })
        console.log(data)
        return NextResponse.json({success:true,data})
    } catch (error) {
        console.log(error)
    }
}