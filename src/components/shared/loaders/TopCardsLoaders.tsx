"use client"


import { Skeleton } from "antd"


const TopCardsLoaders = ({ num = 4 }: { num?: number }) => {

  return (
    <div className="flex items-center gap-6 lg:gap-8">
      {Array(num).fill(0).map((_, i) => (
        <Skeleton.Input key={i} active className="!w-full !h-24" />
      ))}
    </div>
  )
}

export default TopCardsLoaders