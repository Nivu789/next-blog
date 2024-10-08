"use client"

import React from 'react'
import { Button } from "@/components/ui/button"
import { Session } from 'next-auth'
import { doSignout } from '@/app/actions/doCredentialsSignin'

const SessionButton = ({session}:{session:Session | null}) => {

    const handleLogout = async() =>{
        if(!session) return;
        
        await doSignout()
    }

  return (
    <Button variant="outline" onClick={handleLogout}>{session ? "Signout":"Signin"}</Button>
  )
}

export default SessionButton