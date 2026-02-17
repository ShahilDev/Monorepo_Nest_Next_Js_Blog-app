import { blogs } from '@/data/blog'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function LatestPost() {
    const latestBlogs = [...blogs]
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, 4)

    return (
        <div className='bg-background px-6 py-4 rounded-xl'>
            <h3 className='text-lg font-semibold text-foreground mb-4'>Latest Posts</h3>
            <div className='space-y-4'>
                {latestBlogs.map((blog) => (
                    <Link href={`/blog/${blog.id}`} key={blog.id} className='group block'>
                        <div className='flex gap-3'>
                            <Image src={blog.image} alt={blog.title} width={50} height={50} className=' object-cover rounded-lg'/>
                            <div>
                                <h4 className='text-sm font-medium text-foreground group-hover:text-chart-2 dark:group-hover:text-destructive transition-colors line-clamp-2'>
                                    {blog.title.slice(0, 45)}...
                                </h4>
                                <span className='text-xs text-muted-foreground'>
                                    {new Date(blog.date).toLocaleDateString('en-US', {
                                        month: 'short',
                                        day: 'numeric',
                                    year: 'numeric'
                                })}
                            </span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default LatestPost
