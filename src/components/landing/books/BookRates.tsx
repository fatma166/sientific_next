import { BookRate } from "@/services/types"
import { Empty, Rate } from "antd"
import React from 'react'



const SingleBookRate = ({ rate }: { rate: BookRate }) => {

  return <div className="border border-text-10 rounded-lg p-3 lg:p-4 xl:p-5 shadow-sm">

    <div className="flex items-start justify-between gap-4">
      <div>
        <h4 className="text-primary mb-1 text-lg font-bold"> احمد </h4>
        <Rate
          allowHalf
          value={4}
          className="text-sm !text-primary  "
          disabled

        />
      </div>

      <div >
        27-11-2025
      </div>
    </div>
    
      <p>
        تيست 
      </p>
    
  </div>
}
const BookRates = ({ rating }: { rating: BookRate[] }) => {
  return (
<div className="reviews_items flex justify-start items-start flex-col">
  <div className="review_item mb-4 border border-solid border-[#ebebeb] py-[25px] px-[20px] rounded-[15px] flex justify-start items-start flex-col gap-2">
    <div className="flex justify-start items-start flex-col gap-3 flex-wrap w-full">
      <h6 className="text-primary font-semibold sm:text-[20px] text-[18px] mb-0"> الفكر العلمي </h6>
      <div className="stars flex justify-start items-center flex-row gap-1">
        <Rate
          value={4}
          className="!text-[14px] !text-secondary"
        />
      </div>
    </div>
    <span className="text-secondary sm:text-[13px] text-[12px] font-medium"> 27-11-2020 </span>
    <p className="text-fourth-color sm:text-[16px] text-[15px] font-medium leading-[1.7] mb-0">  هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص  </p>
  </div>
  <div className="review_item mb-4 border border-solid border-[#ebebeb] py-[25px] px-[20px] rounded-[15px] flex justify-start items-start flex-col gap-2">
  <div className="flex justify-start items-start flex-col gap-3 flex-wrap w-full">
      <h6 className="text-primary font-semibold sm:text-[20px] text-[18px] mb-0"> الفكر العلمي </h6>
      <div className="stars flex justify-start items-center flex-row gap-1">
        <Rate
          value={4}
          className="!text-[14px] !text-secondary"
        />
      </div>
    </div>
    <span className="text-secondary sm:text-[13px] text-[12px] font-medium"> 27-11-2020 </span>
    <p className="text-fourth-color sm:text-[16px] text-[15px] font-medium leading-[1.7] mb-0">  هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص  </p>
  </div>
  <div className="review_item mb-4 border border-solid border-[#ebebeb] py-[25px] px-[20px] rounded-[15px] flex justify-start items-start flex-col gap-2">
  <div className="flex justify-start items-start flex-col gap-3 flex-wrap w-full">
      <h6 className="text-primary font-semibold sm:text-[20px] text-[18px] mb-0"> الفكر العلمي </h6>
      <div className="stars flex justify-start items-center flex-row gap-1">
        <Rate
          value={4}
          className="!text-[14px] !text-secondary"
        />
      </div>
    </div>
    <span className="text-secondary sm:text-[13px] text-[12px] font-medium"> 27-11-2020 </span>
    <p className="text-fourth-color sm:text-[16px] text-[15px] font-medium leading-[1.7] mb-0">  هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص  </p>
  </div>
</div>
  )
}

export default BookRates