import BlogSection from '@/components/blog/BlogSection'
import Hero from '@/components/home/Hero'
import React from 'react'

function MainSection() {
  return (
    <div className=' mt-4'>
      <div className='sticky top-0 -z-20'>
        <Hero/>
      </div>
      <section className='bg-background rounded-t-xl '>
        <BlogSection/>
      </section>
    </div>
  )
}

export default MainSection