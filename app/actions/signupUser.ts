"use server"

import { signupSchema } from "@/lib/zodSchemas"
import prisma from "@/prisma/db"
import { z } from "zod"
import bcrypt from 'bcryptjs'

export async function signupUser({name,email,password}:z.infer<typeof signupSchema>){
    try {
       const existingUser = await prisma.user.findFirst({
        where:{
            email
        }
       })
       if(existingUser){
        return {
            error:{message:"Email already in use"}
        }
       }else{
        const hashedPass = await bcrypt.hash(password,10)
        const user = await prisma.user.create({
            data:{
                name,
                email,
                password:hashedPass
            }
        })

        if(user){
            return {
                message:"User account created"
            }
        }else{
            return {
                error:{message:"Something went wrong"}
            }
        }
       }

    } catch (error) {
        console.log(error)
    }
}