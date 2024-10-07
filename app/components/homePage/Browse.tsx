import { Button } from '@/components/ui/button'
import React from 'react'
import Container from '../Container'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const Browse = () => {
  return (
    <Container className='pl-44 pr-44'>
    <div className='flex justify-center flex-col gap-20'>
        <div className='flex items-center flex-col gap-3'>
            <div className='text-4xl font-semibold'>Browse By Category</div>
            <div className='text-xl'>Select a category to see more related content</div>
        </div>
        <div className='grid grid-cols-12 gap-8'>
            <Button className='col-span-2 rounded-full text-lg'>All</Button>
            <Button className='col-span-2 rounded-full text-lg'>Health</Button>
            <Button className='col-span-2 rounded-full text-lg'>LifeStyle</Button>
            <Button className='col-span-2 rounded-full text-lg'>Travel</Button>
            <Button className='col-span-2 rounded-full text-lg'>Technology</Button>
            <Button className='col-span-2 rounded-full text-lg'>Culture</Button>
        </div>
        <div className=' grid grid-cols-12'>
            <div className='col-span-4 flex flex-col gap-6 p-4'>
                <div className=''>
                    <img src="./first-card-image.webp" alt="" className='rounded-xl'/>
                </div>
                <div className='text-xl font-semibold'>
                    Wellness Unveiled: Empowering Your Journey to a Balanced and Vibrant Life
                </div>
                <div>
                    In a world filled with constant noise and distractions, the allure of a simpler lifestyle beckons like a soothing whisper.
                </div>
                <div className='flex justify-between'>
                        <div className='flex items-center gap-3'>
                            <Avatar className='w-6 h-6'>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <span>Ryna Kent</span>
                            <span>&#9679;</span>
                            <span>Aug 24 2023</span>
                        </div>

                        <span><Badge variant="outline" className='bg-purple-200 text-purple-500 p-2 rounded-full'>Health</Badge></span>
                </div>
            </div>
            <div className='col-span-4 flex flex-col gap-6 p-4'>
                <div className=''>
                    <img src="./first-card-image.webp" alt="" className='rounded-xl'/>
                </div>
                <div className='text-xl font-semibold'>
                    Wellness Unveiled: Empowering Your Journey to a Balanced and Vibrant Life
                </div>
                <div>
                    In a world filled with constant noise and distractions, the allure of a simpler lifestyle beckons like a soothing whisper.
                </div>
                <div className='flex justify-between'>
                        <div className='flex items-center gap-3'>
                            <Avatar className='w-6 h-6'>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <span>Ryna Kent</span>
                            <span>&#9679;</span>
                            <span>Aug 24 2023</span>
                        </div>

                        <span><Badge variant="outline" className='bg-purple-200 text-purple-500 p-2 rounded-full'>Health</Badge></span>
                </div>
            </div>
            <div className='col-span-4 flex flex-col gap-6 p-4'>
                <div className=''>
                    <img src="./first-card-image.webp" alt="" className='rounded-xl'/>
                </div>
                <div className='text-xl font-semibold'>
                    Wellness Unveiled: Empowering Your Journey to a Balanced and Vibrant Life
                </div>
                <div>
                    In a world filled with constant noise and distractions, the allure of a simpler lifestyle beckons like a soothing whisper.
                </div>
                <div className='flex justify-between'>
                        <div className='flex items-center gap-3'>
                            <Avatar className='w-6 h-6'>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <span>Ryna Kent</span>
                            <span>&#9679;</span>
                            <span>Aug 24 2023</span>
                        </div>

                        <span><Badge variant="outline" className='bg-purple-200 text-purple-500 p-2 rounded-full'>Health</Badge></span>
                </div>
            </div>
            <div className='col-span-4 flex flex-col gap-6 p-4'>
                <div className=''>
                    <img src="./first-card-image.webp" alt="" className='rounded-xl'/>
                </div>
                <div className='text-xl font-semibold'>
                    Wellness Unveiled: Empowering Your Journey to a Balanced and Vibrant Life
                </div>
                <div>
                    In a world filled with constant noise and distractions, the allure of a simpler lifestyle beckons like a soothing whisper.
                </div>
                <div className='flex justify-between'>
                        <div className='flex items-center gap-3'>
                            <Avatar className='w-6 h-6'>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <span>Ryna Kent</span>
                            <span>&#9679;</span>
                            <span>Aug 24 2023</span>
                        </div>

                        <span><Badge variant="outline" className='bg-purple-200 text-purple-500 p-2 rounded-full'>Health</Badge></span>
                </div>
            </div>
            <div className='col-span-4 flex flex-col gap-6 p-4'>
                <div className=''>
                    <img src="./first-card-image.webp" alt="" className='rounded-xl'/>
                </div>
                <div className='text-xl font-semibold'>
                    Wellness Unveiled: Empowering Your Journey to a Balanced and Vibrant Life
                </div>
                <div>
                    In a world filled with constant noise and distractions, the allure of a simpler lifestyle beckons like a soothing whisper.
                </div>
                <div className='flex justify-between'>
                        <div className='flex items-center gap-3'>
                            <Avatar className='w-6 h-6'>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <span>Ryna Kent</span>
                            <span>&#9679;</span>
                            <span>Aug 24 2023</span>
                        </div>

                        <span><Badge variant="outline" className='bg-purple-200 text-purple-500 p-2 rounded-full'>Health</Badge></span>
                </div>
            </div>
            <div className='col-span-4 flex flex-col gap-6 p-4'>
                <div className=''>
                    <img src="./first-card-image.webp" alt="" className='rounded-xl'/>
                </div>
                <div className='text-xl font-semibold'>
                    Wellness Unveiled: Empowering Your Journey to a Balanced and Vibrant Life
                </div>
                <div>
                    In a world filled with constant noise and distractions, the allure of a simpler lifestyle beckons like a soothing whisper.
                </div>
                <div className='flex justify-between'>
                        <div className='flex items-center gap-3'>
                            <Avatar className='w-6 h-6'>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <span>Ryna Kent</span>
                            <span>&#9679;</span>
                            <span>Aug 24 2023</span>
                        </div>

                        <span><Badge variant="outline" className='bg-purple-200 text-purple-500 p-2 rounded-full'>Health</Badge></span>
                </div>
            </div>
        </div>

        <div className='flex justify-center'>
            <Button className='p-6 text-md bg-white text-black hover:text-white'>Browse All Posts</Button>
        </div>

    </div>
    </Container>
  )
}

export default Browse