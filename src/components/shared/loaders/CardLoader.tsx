"use client"
import { Skeleton } from "antd"

const CardLoader = ({ height = 360, num = 1 }: { height?: number, num?: number }) => {
  return (
    <div className="flex flex-col gap-6 container py-4">
      {[...Array(num)].map((_, index) => (
        <div key={index} className="card overflow-hidden" style={{ minHeight: height }}>
          <Skeleton.Button block className="!m-0 !h-full" active style={{ minHeight: height }} />
        </div>
      ))}
    </div>
  )
}

export default CardLoader