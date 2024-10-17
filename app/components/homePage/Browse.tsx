import { Button } from '@/components/ui/button'
import React from 'react'
import Container from '../Container'
import { fetchAllBlogs } from '@/app/actions/blogRelated'
import HomeBlogCard from './HomeBlogCard'


const Browse = async() => {
    
    const response = await fetchAllBlogs()
    const blogData = response?.blogs

  return (
    <Container className='flex flex-col lg:pl-44 lg:pr-44 lg:mt-0 items-center'>
    <div className='flex justify-center flex-col gap-20 w-full items-center'>
        <div className='flex items-center flex-col gap-3 w-full text-center'>
            <div className='text-4xl font-semibold'>Browse By Category</div>
            <div className='text-xl'>Select a category to see more related content</div>
        </div>
        <div className='grid grid-cols-12 gap-8'>
            <Button className='col-span-6 lg:col-span-2 rounded-full text-lg'>All</Button>
            <Button className='col-span-6 lg:col-span-2 rounded-full text-lg'>Health</Button>
            <Button className='col-span-6 lg:col-span-2 rounded-full text-lg'>LifeStyle</Button>
            <Button className='col-span-6 lg:col-span-2 rounded-full text-lg'>Travel</Button>
            <Button className='col-span-6 lg:col-span-2 rounded-full text-lg'>Technology</Button>
            <Button className='col-span-6 lg:col-span-2 rounded-full text-lg'>Culture</Button>
        </div>
        
        <div className=' grid grid-cols-12'>
            {blogData && blogData.map((item)=>(
                <HomeBlogCard item={item} key={item.id}/>
            ))}
        </div>

        <div className='lg:flex lg:justify-center'>
            <Button className='p-6 text-md bg-white text-black hover:text-white'>Browse All Posts</Button>
        </div>

    </div>
    </Container>
  )
}

export default Browse