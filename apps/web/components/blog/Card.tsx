import Image from "next/image";
import { format } from "date-fns";
import { Blog } from "@/types/Blog";

interface BlogCardProps {
  blog: Blog;
}

export default function Card({ blog }: BlogCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-md bg-white dark:bg-background shadow-md transition-all duration-500 hover:shadow-xl flex flex-col h-full">
      
      {/* Image */}
      <div className="relative h-50 w-full overflow-hidden">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Dark overlay on hover */}
        <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/30" />
      </div>

      {/* Content */}
      <div className="p-6 space-y-1 grow flex flex-col">
        <p className="text-sm text-muted-foreground dark:text-foreground/60">
          {format(new Date(blog.date), "MMM dd, yyyy")}
        </p>

        <h3 className="text-lg font-semibold leading-snug text-foreground transition-colors duration-300 dark:group-hover:text-destructive group-hover:text-chart-2">
          {blog.title}
        </h3>

        <p className="text-sm text-muted-foreground">
            {blog.description.slice(0,50)}...
        </p>
        <div className="pt-2 mt-auto">
          <span className=" text-sm  font-medium text-chart-2  dark:text-destructive group-hover:translate-x-1 transition-transform duration-300">
            Read More →
          </span>
        </div>
      </div>
    </article>
  );
}
