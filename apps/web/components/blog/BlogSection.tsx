import React from 'react'
import Card from './Card'
import SideBar from './SideBar'
import { blogs } from '@/data/blog'
import { Grid, List } from 'lucide-react'
import SortBy  from './ShortMenu'
import ShortBy from './ShortMenu'
import { SearchBox } from '../navigation/SearchBox'

function BlogSection() {

  const Blogs = blogs
  return (
    <div className='space-y-6  px-8 py-4 rounded-lg'>
      <div className='flex gap-10 justify-between max-w-[100%] items-center'>

      <div className='text-muted-foreground gap-6 inline-flex  items-center justify-center'>
        <div className='flex gap-2'>
        <Grid size={18} className='text-chart-2 dark:text-destructive'/>
        <List size={18}/>
        </div>
         <p className='text-sm leading-0 tracking-tight'>
        showing<span className='text-chart-2 dark:text-destructive'> {blogs.length} results </span>
      </p>
      </div>
      <div className='flex px-2 gap-8'>
      <ShortBy/>
      <SearchBox/>
      </div>
      
      </div>
    <div className='grid' style={{gridTemplateColumns: '75% 25%'}}>
        
      <div className='grid grid-cols-3 gap-4'>
      {
        Blogs.map((blog) => {
          return <Card key={blog.id} blog={blog}/>
        })
      }
      </div>
      <div className='flex justify-end'>

      <SideBar/>
      </div>

    </div>
    </div>
  )
}

export default BlogSection