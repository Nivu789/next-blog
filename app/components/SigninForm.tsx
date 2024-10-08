"use client"

import React, { FormEvent, useState } from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from '@/components/ui/button';
import { doCredentialsSignin, doGithubSignin, doGoogleSignin } from '../actions/doCredentialsSignin';


import { useRouter } from 'next/navigation';
import Link from 'next/link';


const SigninForm = () => {

    const router = useRouter()

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [error,setError] = useState('')

    const handleSubmit = async(e:FormEvent) =>{
        e.preventDefault()
        const formData = new FormData()
        formData.append("email",email)
        formData.append("password",password)
        try {
            const response = await doCredentialsSignin(formData)
            if(response?.error){
                console.log(response)
                setError(response.message)
            }else{
                
                router.push('/')
                router.refresh()
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleGoogleSignin = async() =>{
        await doGoogleSignin()
    }

    const handleGithubSignin = async() =>{
        await doGithubSignin()
    }

    return (
        <form className='flex items-center flex-col shadow-xl py-14 gap-6 px-20' onSubmit={handleSubmit}>
            <div className='text-3xl font-semibold'>Signin</div>
            <div className='text-lg'>Sign in to your account</div>
            {error && <p className='text-red-500'>{error}</p>}

            <button type="button" className='py-2 border w-full flex items-center justify-center gap-2 text-lg rounded-lg px-12' onClick={handleGoogleSignin}>
                <FcGoogle />
                Sign in with Google
            </button>

            <button type="button" className='py-2 border w-full flex items-center justify-center gap-2 text-lg rounded-lg' onClick={handleGithubSignin}>
                <FaGithub />
                Sign in with Github
            </button>

            <div className='flex px-8 gap-2'>
                <div>&#9472;</div>
                Or signin with email
                <div>&#9472;</div>
            </div>

            <div className='w-full flex flex-col gap-4'>
                <div>
                    <Label htmlFor="email">Email</Label>
                    <Input type='text' value={email} onChange={(e)=>setEmail(e.target.value)}></Input>
                </div>

                <div>
                    <Label htmlFor="email">Password</Label>
                    <Input type='text' value={password} onChange={(e)=>setPassword(e.target.value)}></Input>
                </div>

            </div>

            <div>
                <Button type='submit'>Sigin</Button>
            </div>

            <div>
                <p>Don't have an account? <Link href="/signup">Signup for free</Link></p>
            </div>

        </form>

    )
    
}

export default SigninForm