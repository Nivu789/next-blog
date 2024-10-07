import React from 'react'
import Container from '../Container'
import { Button } from '@/components/ui/button'

const NewsLetter = () => {
  return (
    <Container className='pl-44 pr-44 mt-14 pt-14 pb-14' style={{backgroundImage:'url(./bg-dots.svg)'}}>
        <div className='grid grid-cols-12 border p-8 rounded-xl bg-white gap-8'>
            <div className='col-span-6 flex flex-col gap-2'>
                <div className='text-2xl font-semibold'>Subscribe to Newsletter</div>
                <div className='text-md'>
                    Provide your email to get email notification when we launch new products or publish new articles
                </div>
            </div>
            <div className='col-span-6 flex items-center gap-3'>
                <input type="text" placeholder='Enter your email' className='w-full rounded-sm p-2'/>
                <Button className='p-5'>Subscribe</Button>
            </div>
        </div>
    </Container>
    
  )
}

export default NewsLetter