import React from 'react'
import Container from '../Container'
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"



const Featured = () => {
    return (
        <Container className="flex pl-6 pr-6 lg:pl-44 lg:pr-44 pt-16 h-screen w-full" style={{backgroundImage:'url',}}>
            <div className='flex flex-col gap-8'>
                <div className='first-card grid grid-cols-1 lg:grid-cols-2 p-3 rounded-xl shadow-xl'>
                    <div className='col'>
                        <img src="/first-card-image.webp" alt="" className='object-cover w-full h-full rounded-xl' />
                    </div>
                    <div className='flex flex-col justify-center gap-6 pl-4 pt-3 lg:pt-0'>
                        <span><Badge variant="outline" className='bg-purple-200 text-purple-500 p-2 rounded-full'>Health</Badge></span>
                        <div className='text-3xl font-semibold'>Wellness Unveiled: Empowering Your Journey to a Balanced and Vibrant Life</div>
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
                <div className='grid grid-cols-12 lg:h-56 pt-2 gap-9'>
                    <div className='first-card  p-3 rounded-xl col-span-12 lg:col-span-6 grid grid-cols-1 lg:grid-cols-2 h-full shadow-xl gap-2 lg:gap-0'>
                        <div className='h-full'>
                            <img src="/first-card-image.webp" alt="" className='object-cover w-full h-full rounded-xl' />
                        </div>
                        <div className='flex flex-col pl-4 justify-center gap-2'>
                            <span><Badge variant="outline" className='bg-purple-200 text-purple-500 p-2 rounded-full'>Health</Badge></span>
                            <div className='text-xl font-semibold'>Wellness Unveiled: Empowering Your Journey to a Balanced and Vibrant Life</div>
                            

                            <div className='flex items-center gap-3'>
                                <Avatar className='w-6 h-6'>
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <span>Ryna Kent</span>
                                <span>&#9679;</span>
                                <span>Aug 24 2023</span>
                            </div>


                        </div>
                    </div>

                    <div className='first-card  p-3 rounded-xl col-span-12 lg:col-span-6 grid grid-cols-1 lg:grid-cols-2 h-full shadow-xl gap-2 lg:gap-0'>
                        <div className=''>
                            <img src="/first-card-image.webp" alt="" className='object-cover w-full  h-full rounded-xl' />
                        </div>
                        <div className='flex flex-col pl-4 justify-center gap-2'>
                            <span><Badge variant="outline" className='bg-purple-200 text-purple-500 p-2 rounded-full'>Health</Badge></span>
                            <div className='text-xl font-semibold'>Wellness Unveiled: Empowering Your Journey to a Balanced and Vibrant Life</div>
                            

                            <div className='flex items-center gap-3'>
                                <Avatar className='w-6 h-6'>
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <span>Ryna Kent</span>
                                <span>&#9679;</span>
                                <span>Aug 24 2023</span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Featured