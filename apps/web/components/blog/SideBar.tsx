"use client"
import React, { useState } from 'react'
import { motion } from 'motion/react'
import { ChevronRight } from 'lucide-react'
import LatestPost from './LatestPost'
import Tags from './Tags'

function SideBar() {
  const [selectedCategory, setSelectedCategory] = useState('')

  const categories = [
    { id: 'social', name: 'Social' },
    { id: 'development', name: 'Development' },
    { id: 'tips', name: 'Tips & Tricks' },
    { id: 'coding', name: 'Coding' }
  ]

  return (
    <div className="space-y-6 w-[90%]">


      <div className="bg-background px-6 py-4 rounded-xl">
        <h3 className="text-lg font-semibold text-foreground mb-4">
          All Categories
        </h3>
        <ul className="space-y-2">
          {categories.map((category) => (
            <motion.li
              key={category.id}
              className={`
                relative flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer transition-all duration-200
                ${selectedCategory === category.id
                  ? 'bg-chart-2/10 text-chart-2 dark:bg-destructive/10 dark:text-destructive'
                  : 'text-gray-400 hover:bg-chart-2/50 hover:text-white dark:hover:bg-destructive/70 dark:hover:text-white'
                }
              `}
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedCategory(category.id)}
            >
              <span className="flex-1 ">{category.name}</span>
              <motion.div
                animate={{
                  opacity: selectedCategory === category.id ? 1 : 0,
                  x: selectedCategory === category.id ? 0 : -10
                }}
                transition={{ duration: 0.2 }}
              >
                <ChevronRight size={16} className="dark:text-destructive text-chart-2" />
              </motion.div>
            </motion.li>
          ))}
        </ul>
      </div>

      <LatestPost />
      <Tags />
    </div>
  )
}

export default SideBar