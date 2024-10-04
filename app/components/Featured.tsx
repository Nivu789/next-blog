import React from 'react'
import Container from './Container'
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"



const Featured = () => {
    return (
        <Container>
            <div>
                <div className='first-card grid grid-cols-2 bg-red-200 p-3 rounded-xl'>
                    <div className='col'>
                        <img src="/first-card-image.webp" alt="" className='object-contain w-full h-full rounded-xl' />
                    </div>
                    <div className='flex flex-col justify-center gap-6 pl-4'>
                        <span><Badge variant="outline">Health</Badge></span>
                        <div className='text-3xl'>Wellness Unveiled: Empowering Your Journey to a Balanced and Vibrant Life</div>
                        <div className='text-lg'>In a world filled with constant noise and distractions, the allure of a simpler lifestyle beckons like a soothing whisper.</div>

                        <div className='flex items-center gap-3'>
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <span>Ryna Kent</span>
                            <span>&#9679;</span>
                            <span>Aug 24 2023</span>
                        </div>


                    </div>
                </div>
                <div className='grid grid-cols-12'>
                    <div className='first-card bg-red-200 p-3 rounded-xl'>
                        <div className='col'>
                            <img src="/first-card-image.webp" alt="" className='object-contain w-full h-full rounded-xl' />
                        </div>
                        <div className='flex flex-col justify-center gap-6 pl-4'>
                            <span><Badge variant="outline">Health</Badge></span>
                            <div className='text-3xl'>Wellness Unveiled: Empowering Your Journey to a Balanced and Vibrant Life</div>
                            <div className='text-lg'>In a world filled with constant noise and distractions, the allure of a simpler lifestyle beckons like a soothing whisper.</div>

                            <div className='flex items-center gap-3'>
                                <Avatar>
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <span>Ryna Kent</span>
                                <span>&#9679;</span>
                                <span>Aug 24 2023</span>
                            </div>


                        </div>
                    </div>
                    <div className='col'>
                        second grid
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Featured