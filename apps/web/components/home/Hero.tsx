"use client"
import { Titan_One } from 'next/font/google'

import { LineShadowText } from '../ui/line-shadow-text'
import { useTheme } from 'next-themes'
import { ArrowUpRight, ChevronRight, LineChartIcon, Minus } from 'lucide-react'
const titanOne = Titan_One({
  weight: '400',
  subsets: ['latin'],
})

function Hero() {

    const theme = useTheme()
    const shadowColor = theme.resolvedTheme === "dark" ? "white" : "black"
  return (

    <div className='dark:bg-foreground/10  relative flex h-[350px] w-full flex-col items-center justify-center overflow-hidden rounded-t-xl'>
        <h1 className={`flex items-center justify-center text-4xl md:text-6xl ${titanOne.className} z-10 relative`}>
            BLOGS <span className='bg-transparent outline-text mx-3'>THAT</span> INSPIRE
          <Minus className='absolute -top-4 right-32 text-[#EAB308] -z-10 pointer-events-none transform rotate-130' strokeWidth={4} size={70}/>
          <ChevronRight  className='absolute -top-8 right-29 text-[#EAB308] pointer-events-none transform -rotate-50' strokeWidth={4} size={70}/>
        </h1>
    </div>
  )
}

export default Hero