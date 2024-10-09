import {z} from 'zod'

export const signupSchema = z.object({
    name:z.string({required_error:"Name is required"}).min(3,"Provide a valid name"),
    email:z.string({required_error:"Email is required"}).min(2,"Provide valid email").email("Invalid email"),
    password:z.string({required_error:"Password is required"}).min(8,"Password must be 8 characters long")
})