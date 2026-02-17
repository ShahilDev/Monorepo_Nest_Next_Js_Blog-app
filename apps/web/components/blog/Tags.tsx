import React from 'react'

function Tags() {
    const tags = [
        'Next.js', 'React', 'TypeScript', 'Tailwind',
        'Node.js', 'NestJS', 'GraphQL', 'Docker',
        'System Design', 'Performance'
    ]

    return (
        <div className='bg-background px-6 py-4 rounded-xl '>
            <h3 className='text-lg font-semibold text-foreground mb-4'>Tags</h3>
            <div className='flex flex-wrap gap-2'>
                {tags.map((tag) => (
                    <span
                        key={tag}
                        className='px-3 py-1 text-xs font-medium bg-secondary text-white dark:text-foreground rounded-full hover:bg-chart-2 hover:text-white dark:hover:bg-destructive dark:hover:text-white transition-colors cursor-pointer'
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    )
}

export default Tags
