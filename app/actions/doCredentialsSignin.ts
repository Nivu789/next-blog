"use server"

import { signIn } from "next-auth/react"

export const doCredentialsSignin = async(email:string,password:string) =>{

    console.log(email,password)

    const result = await signIn("credentials",{
        redirect:false,
        email,
        password
    })

    console.log(result)
    
    return result
}