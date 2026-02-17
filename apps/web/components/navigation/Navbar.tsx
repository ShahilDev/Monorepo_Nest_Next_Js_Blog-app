"use client"

import Image from "next/image"
import { ModeToggle } from "./ModeToggle"
import { Button, buttonVariants } from "../ui/button"
import {motion} from "motion/react"



function Navbar() {
  return (
    <div>
        <div className="flex items-center justify-between">
            <p>postra</p>
            <div className="flex gap-2 items-center">
             <motion.p
              className="relative inline-block text-sm px-2 py-1 cursor-pointer"
              initial="rest"
              whileHover="hover"
              animate="rest"
            >
              Our story
              <motion.span
                className="absolute left-0 bottom-0 h-[2px] bg-chart-2/60 dark:bg-destructive"
                variants={{
                  rest: { width: 0 },
                  hover: { width: "100%" },
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.p>
             <motion.p
              className="relative inline-block px-2 py-1 text-sm cursor-pointer"
              initial="rest"
              whileHover="hover"
              animate="rest"
            >
              Blogs
              <motion.span
                className="absolute left-0 bottom-0 h-[2px] bg-chart-2/60 dark:bg-destructive"
                variants={{
                  rest: { width: 0 },
                  hover: { width: "100%" },
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.p>

          <Button className="bg-chart-2/60 dark:bg-destructive text-foreground hover:bg-chart-2/80 dark:hover:bg-destructive/80 transition-all duration-300 ease-in-out transform hover:scale-105 dark:text-foreground">
            Get started
           </Button>
           <Button variant={"ghost"} className="transition-all duration-300 ease-in-out transform hover:scale-105 bg-chart-2/10">
            login
           </Button>
           <ModeToggle/>
            </div>
        </div>
    </div>
  )
}

export default Navbar