"use client"

import React from 'react'
import 'react-toastify/dist/ReactToastify.css';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from 'zod'
import { signupSchema } from '@/lib/zodSchemas'
import AuthButton from './AuthButton'
import { signupUser } from '../actions/signupUser'
import { Bounce, ToastContainer, toast } from 'react-toastify';
import Link from 'next/link';
import { useRouter } from 'next/navigation';




const SignupForm = () => {
  
  const form = useForm<z.infer<typeof signupSchema>>({
    resolver:zodResolver(signupSchema),
    defaultValues:{
      name:"",
      email:"",
      password:""
    }
  })

  const router = useRouter()


  const handleSignup = async(values:z.infer<typeof signupSchema>) =>{
    try {
      const response = await signupUser(values)
      if(response?.error){
          toast.error(response.error.message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
          });
      }else{
        toast.success(response?.message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
          });
          
          router.replace('/signin')
      }

      
      
      

      console.log(response?.message)

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <ToastContainer/>
      
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSignup)} className='flex items-center flex-col shadow-xl py-14 gap-6 px-20'>
      <div className='text-3xl font-semibold'>Signup</div>
      <div className='text-lg'>Create an account</div>

      <div className='w-full flex flex-col gap-4'>
    <FormField
    control={form.control}
    name="name"
    render={({ field }) => (
    <FormItem>
      <FormLabel>Username</FormLabel>
      <FormControl>
        <Input placeholder="Username" {...field} />
      </FormControl>
      <FormDescription>This is your public display name.</FormDescription>
      <FormMessage />
    </FormItem>
  )}
    />

    <FormField
    control={form.control}
    name="email"
    render={({ field }) => (
    <FormItem>
      <FormLabel>Email</FormLabel>
      <FormControl>
        <Input placeholder="Email" {...field} />
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
    />

    <FormField
    control={form.control}
    name="password"
    render={({ field }) => (
    <FormItem>
      <FormLabel>Password</FormLabel>
      <FormControl>
        <Input placeholder="Password" {...field} />
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
    />
    </div>
    
    <AuthButton text='Signup' pending={form.formState.isSubmitting} type='submit'/>

    <div>
      Already have an account?<Link href='/signin'> Signin</Link>
    </div>
    </form>

    </Form>
    
    </>
  )
}

export default SignupForm