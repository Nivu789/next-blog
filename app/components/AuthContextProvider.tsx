"use client"

import { SessionProvider } from "next-auth/react"
import { Session } from "next-auth";

export const NextAuthProvider = ({children}:{
    children:React.ReactNode,
}) =>{
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}