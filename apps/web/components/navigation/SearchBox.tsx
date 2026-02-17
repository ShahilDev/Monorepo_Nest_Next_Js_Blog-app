import { Search } from "lucide-react"

export function SearchBox() {
  return (
    <div className="relative group">
      <input 
        type="text" 
        placeholder="Search blogs..." 
        className="w-full px-4 py-2 pr-12 border border-muted-foreground rounded-xl bg-background text-sm focus:outline-none focus:ring-1 focus:ring-chart-2 dark:focus:ring-destructive focus:border-transparent hover:border-chart-2 dark:hover:border-destructive transition-all duration-300 placeholder:text-gray-400"
      />
      <Search 
        size={18} 
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-chart-2 dark:text-destructive cursor-pointer hover:scale-110 transition-transform duration-200"
      />
    </div>
  )
}
