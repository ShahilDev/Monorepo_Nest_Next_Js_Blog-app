import React from 'react'

function SortBy() {
  return (
    <div>
    <select 
      id="sort" 
      name="sort"
      className="px-4 py-2 border text-muted-foreground border-gray-300 rounded-md bg-white text-sm focus:outline-none hover:border-chart-2 transition-colors cursor-pointer"
    >
        <option value="latest">Latest</option>
        <option value="oldest">Oldest</option>
        <option value="title-asc">Title (A-Z)</option>
        <option value="title-desc">Title (Z-A)</option>
    </select>
    </div>
  )
}

export default SortBy