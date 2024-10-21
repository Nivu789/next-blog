"use server"

import { signIn,signOut } from "@/auth"
import { AuthError } from "next-auth"


export const doCredentialsSignin = async(formData:FormData) =>{
    try {
        const email = formData.get("email")
        const password = formData.get("password")
        const response = await signIn("credentials",{redirect:false,email,password})   
        console.log(response)
        return response
    } catch (error) {
        if (error instanceof AuthError) {
            if (error.cause?.err instanceof Error) {
                console.log("here here")
              return {error:true,message:error.cause.err.message};
            }
          }
          throw error;
    }
}

export const doSignout = async() =>{
    console.log("called")
    await signOut()
}

export const doGoogleSignin = async() =>{
    await signIn("google",{redirectTo:'/'})
}

export const doGithubSignin = async() =>{
    await signIn("github",{redirectTo:"/"})
}