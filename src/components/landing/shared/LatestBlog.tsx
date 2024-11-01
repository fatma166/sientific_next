import { RevealAnimation } from "@/components/shared"
import React from 'react'
import BlogCard from "../blog/BlogCard"
import { HomeBlog } from "@/services/types"

const LatestBlog = ({ data }: { data: HomeBlog[] }) => {
  return (
    <section className="py-12 bg-[#fff]">
      <RevealAnimation>
        <div className="container">
          <div className="text-base text-center ">
            <span className="  py-2 px-6 bg-primary-10 text-primary rounded-full font-bold inline-block  ">
              اخر الأخبار
            </span>
          </div>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {data.map((item, ix) => (

              <BlogCard key={item.id} data={item} index={ix} />
            ))}

          </div>
        </div>
      </RevealAnimation>
    </section>
  )
}

export default LatestBlog