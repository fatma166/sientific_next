"use client"
import { RevealAnimation } from "@/components/shared"
import React from 'react'

import bgImg from '@/assets/images/landing/home-library-bg.png'
import { HomeSingleDetailsSection } from "@/services/types"
import { useLanguage } from "@/services/hooks"
import { NextImage } from "@/components/shared";


const data = [
  {
    title: 'واجهة مستخدم سهلة الاستخدام',
    desc: 'تصميم المكتبة يعتمد على واجهة بديهية تسهل على المستخدمين البحث عن الكتب، تصفحها، وتنزيلها أو قراءتها مباشرة عبر الإنترنت'
  },
  {
    title: 'التفاعل مع النصوص',
    desc: 'يمكن للمستخدمين تظليل النصوص المهمة، إضافة ملاحظات، وعمل إشارات مرجعية للعودة إلى النقاط الهامة لاحقاً. بعض المكتبات التفاعلية تتيح أيضاً إمكانية المشاركة والتعليق على الكتب مع مستخدمين آخرين.'
  },
  {
    title: 'محركات بحث متقدم',
    desc: 'توفر المكتبة أدوات بحث متقدمة تمكن المستخدمين من العثور على الكتب باستخدام كلمات مفتاحية، أسماء المؤلفين، أو الموضوعات'
  },
  {
    title: 'التوصيات المخصصة',
    desc: 'تعتمد المكتبة على تقنيات الذكاء الاصطناعي لتقديم توصيات مخصصة لكل مستخدم بناءً على اهتماماتهم وقراءاتهم السابقة'
  },
  {
    title: 'قراءة اجتماعية',
    desc: 'يمكن للمستخدمين الانضمام إلى مجموعات قراءة، مناقشة الكتب مع الأعضاء الآخرين، والمشاركة في فعاليات وورش عمل ذات صلة.'
  },
  {
    title: 'توافق مع الأجهزة المختلفة',
    desc: 'المكتبة التفاعلية عادةً ما تكون متاحة عبر مختلف الأجهزة مثل الحواسيب، الهواتف الذكية، والأجهزة اللوحية، مما يسمح للمستخدمين بالوصول إلى كتبهم في أي وقت وأي مكان.'
  },
]

const HomeLibraryNum = ({ data }: { data: HomeSingleDetailsSection }) => {


  return (
    // <section className="dark hidden">
    //   <RevealAnimation>
    //     <div className="relative" >
    //       <div className="  h-[100%] w-full absolute -z-10">

    //         <div className="bg-cover h-full w-full " style={{
    //           backgroundImage: `url(${bgImg.src})`,
    //         }}>
    //           <div className="w-full h-full !bg-[#393939bf]">
    //           </div>
    //         </div>
    //       </div>
    //       <div className=" py-12   ">
    //         <div className="container dark ">
    //           <div className="text-center">
    //             <div className="text-lg ">
    //               <span className="  py-3 px-10 bg-white text-[30px] text-primary rounded-full font-bold inline-block  ">
    //                 {data?.main_section?.title}
    //               </span>
    //             </div>

    //             <div className="text-white mt-6 font-medium"

    //               dangerouslySetInnerHTML={{ __html: data?.main_section?.details || '' }}
    //             />


    //           </div>

    //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6  mt-8 lg:mt-10">

    //             {data?.items?.data.map((item, index) => (
    //               <div key={index} className="bg-[#553ddd82] p-4 lg:py-6 text-center text-white rounded-md shadow-md">
    //                 <h4 className="text-lg font-bold mb-2 text-white">
    //                   {item?.title}
    //                 </h4>
    //                 <p className="opacity-90 text-white" >{item.details}
    //                   {item?.details}
    //                 </p>
    //               </div>
    //             ))}
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </RevealAnimation>
    // </section>
    <section className="library__num sm:py-[80px] pt-[50px] lg:!px-[130px] bg-[#fff]">
      <div className="text-center flex justify-center items-center flex-col">
        <div className=" flex justify-center items-center flex-row bg_bg">
                   <span className="">
                     {data?.main_section?.title}
                   </span>
        </div>

                 <div className="text-[#505050] text-center my-6 font-medium lg:w-[650px] flex justify-center items-center"

                   dangerouslySetInnerHTML={{ __html: data?.main_section?.details || '' }} />
        </div>
        
      <div className="grid-container">
        
        <div className="library__num__item border border-solid border-[#ccc] feature bg-[#fff] py-[10px] px-[20px] rounded-[12px] flex justify-center flex-col items-center gap-5">
            <div className="shapeBg">
							<NextImage
                src='https://roqay.com/wp-content/themes/Roqay/assets/images/icon-red.png'
                className="green !h-[100px]"
              />
              <span></span>
              <svg className="green" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M8 21H16M12 17V21" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 7.8C2 6.11984 2 5.27976 2.32698 4.63803C2.6146 4.07354 3.07354 3.6146 3.63803 3.32698C4.27976 3 5.11984 3 6.8 3H17.2C18.8802 3 19.7202 3 20.362 3.32698C20.9265 3.6146 21.3854 4.07354 21.673 4.63803C22 5.27976 22 6.11984 22 7.8V12.2C22 13.8802 22 14.7202 21.673 15.362C21.3854 15.9265 20.9265 16.3854 20.362 16.673C19.7202 17 18.8802 17 17.2 17H6.8C5.11984 17 4.27976 17 3.63803 16.673C3.07354 16.3854 2.6146 15.9265 2.32698 15.362C2 14.7202 2 13.8802 2 12.2V7.8Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

						</div>
						<div className="content flex justify-center items-center gap-1 flex-col">
							<h5 className="!text-[#533AD4] font-semibold text-[17px]">واجهة مستخدم سهلة الاستخدام</h5>
						  <p> تصميم المكتبة يعتمد على واجهة بديهية تسهل على المستخدمين البحث عن الكتب، تصفحها، وتنزيلها أو قراءتها مباشرة عبر الإنترنت </p>
							
						</div>
        </div>
        <div className="library__num__item border border-solid border-[#ccc] feature bg-[#fff] py-[10px] px-[20px] rounded-[12px] flex justify-center flex-col items-center gap-5">
            <div className="shapeBg">
							<NextImage
                src='https://roqay.com/wp-content/themes/Roqay/assets/images/icon-red.png'
                className="blue !h-[100px]"
              />
              <span></span>
              <svg className="blue"   width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 7C4 6.06812 4 5.60218 4.15224 5.23463C4.35523 4.74458 4.74458 4.35523 5.23463 4.15224C5.60218 4 6.06812 4 7 4H17C17.9319 4 18.3978 4 18.7654 4.15224C19.2554 4.35523 19.6448 4.74458 19.8478 5.23463C20 5.60218 20 6.06812 20 7M9 20H15M12 4V20" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

						</div>
						<div className="content flex justify-center items-center gap-1 flex-col">
							<h5 className="!text-[#533AD4] font-semibold text-[17px]">التفاعل مع النصوص</h5>
						  <p> يمكن للمستخدمين تظليل النصوص المهمة، إضافة ملاحظات، وعمل إشارات مرجعية للعودة إلى النقاط الهامة لاحقاً. بعض المكتبات التفاعلية تتيح أيضاً إمكانية المشاركة والتعليق على الكتب مع مستخدمين آخرين. </p>
							
						</div>
        </div>
        <div className="library__num__item border border-solid border-[#ccc] feature bg-[#fff] py-[10px] px-[20px] rounded-[12px] flex justify-center flex-col items-center gap-5">
            <div className="shapeBg">
							<NextImage
                src='https://roqay.com/wp-content/themes/Roqay/assets/images/icon-red.png'
                className="yellow !h-[100px]"
              />
              <span></span>
              <svg className="yellow" width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.4" d="M21 21L17.5001 17.5" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M11.5 20C16.1944 20 20 16.1944 20 11.5C20 6.80558 16.1944 3 11.5 3C6.80558 3 3 6.80558 3 11.5C3 16.1944 6.80558 20 11.5 20Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
						</div>
						<div className="content flex justify-center items-center gap-1 flex-col">
							<h5 className="!text-[#533AD4] font-semibold text-[17px]">محركات بحث متقدم</h5>
						  <p> توفر المكتبة أدوات بحث متقدمة تمكن المستخدمين من العثور على الكتب باستخدام كلمات مفتاحية، أسماء المؤلفين، أو الموضوعات </p>
							
						</div>
        </div>
        <div className="library__num__item border border-solid border-[#ccc] feature bg-[#fff] py-[10px] px-[20px] rounded-[12px] flex justify-center flex-col items-center gap-5">
            <div className="shapeBg">
							<NextImage
                src='https://roqay.com/wp-content/themes/Roqay/assets/images/icon-red.png'
                className="red !h-[100px]"
              />
              <span></span>
              <svg className="red" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M7.86866 15.4599L7 21.9999L11.5884 19.2469C11.7381 19.1571 11.8129 19.1122 11.8928 19.0947C11.9634 19.0791 12.0366 19.0791 12.1072 19.0947C12.1871 19.1122 12.2619 19.1571 12.4116 19.2469L17 21.9999L16.1319 15.457" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.4259 4.24888C16.5803 4.6224 16.8768 4.9193 17.25 5.0743L18.5589 5.61648C18.9325 5.77121 19.2292 6.06799 19.384 6.44154C19.5387 6.81509 19.5387 7.23481 19.384 7.60836L18.8422 8.91635C18.6874 9.29007 18.6872 9.71021 18.8427 10.0837L19.3835 11.3913C19.4602 11.5764 19.4997 11.7747 19.4997 11.975C19.4998 12.1752 19.4603 12.3736 19.3837 12.5586C19.3071 12.7436 19.1947 12.9118 19.0531 13.0534C18.9114 13.195 18.7433 13.3073 18.5582 13.3839L17.2503 13.9256C16.8768 14.0801 16.5799 14.3765 16.4249 14.7498L15.8827 16.0588C15.728 16.4323 15.4312 16.7291 15.0577 16.8838C14.6841 17.0386 14.2644 17.0386 13.8909 16.8838L12.583 16.342C12.2094 16.1877 11.7899 16.188 11.4166 16.3429L10.1077 16.8843C9.73434 17.0387 9.31501 17.0386 8.94178 16.884C8.56854 16.7293 8.27194 16.4329 8.11711 16.0598L7.57479 14.7504C7.42035 14.3769 7.12391 14.08 6.75064 13.925L5.44175 13.3828C5.06838 13.2282 4.77169 12.9316 4.61691 12.5582C4.46213 12.1849 4.46192 11.7654 4.61633 11.3919L5.1581 10.0839C5.31244 9.71035 5.31213 9.29079 5.15722 8.91746L4.61623 7.60759C4.53953 7.42257 4.50003 7.22426 4.5 7.02397C4.49997 6.82369 4.5394 6.62536 4.61604 6.44032C4.69268 6.25529 4.80504 6.08716 4.94668 5.94556C5.08832 5.80396 5.25647 5.69166 5.44152 5.61508L6.74947 5.07329C7.12265 4.91898 7.41936 4.6229 7.57448 4.25004L8.11664 2.94111C8.27136 2.56756 8.56813 2.27078 8.94167 2.11605C9.3152 1.96132 9.7349 1.96132 10.1084 2.11605L11.4164 2.65784C11.7899 2.81218 12.2095 2.81187 12.5828 2.65696L13.8922 2.11689C14.2657 1.96224 14.6853 1.96228 15.0588 2.11697C15.4322 2.27167 15.729 2.56837 15.8837 2.94182L16.426 4.25115L16.4259 4.24888Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

						</div>
						<div className="content flex justify-center items-center gap-1 flex-col">
							<h5 className="!text-[#533AD4] font-semibold text-[17px]">التوصيات المخصصة</h5>
						  <p> تعتمد المكتبة على تقنيات الذكاء الاصطناعي لتقديم توصيات مخصصة لكل مستخدم بناءً على اهتماماتهم وقراءاتهم السابقة </p>
							
						</div>
        </div>
        <div className="library__num__item border border-solid border-[#ccc] feature bg-[#fff] py-[10px] px-[20px] rounded-[12px] flex justify-center flex-col items-center gap-5">
            <div className="shapeBg">
							<NextImage
                src='https://roqay.com/wp-content/themes/Roqay/assets/images/icon-red.png'
                className="brown !h-[100px]"
              />
              <span></span>
              <svg className="brown" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M22 7.2C22 6.07989 22 5.51984 21.782 5.09202C21.5903 4.71569 21.2843 4.40973 20.908 4.21799C20.4802 4 19.9201 4 18.8 4H18.4C16.1598 4 15.0397 4 14.184 4.43597C13.4314 4.81947 12.8195 5.43139 12.436 6.18404C12 7.03968 12 8.15979 12 10.4V20H18.8C19.9201 20 20.4802 20 20.908 19.782C21.2843 19.5903 21.5903 19.2843 21.782 18.908C22 18.4802 22 17.9201 22 16.8V7.2Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 7.2C2 6.07989 2 5.51984 2.21799 5.09202C2.40973 4.71569 2.71569 4.40973 3.09202 4.21799C3.51984 4 4.07989 4 5.2 4H5.6C7.84021 4 8.96031 4 9.81596 4.43597C10.5686 4.81947 11.1805 5.43139 11.564 6.18404C12 7.03968 12 8.15979 12 10.4V20H5.2C4.07989 20 3.51984 20 3.09202 19.782C2.71569 19.5903 2.40973 19.2843 2.21799 18.908C2 18.4802 2 17.9201 2 16.8V7.2Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

						</div>
						<div className="content flex justify-center items-center gap-1 flex-col">
							<h5 className="!text-[#533AD4] font-semibold text-[17px]">قراءة اجتماعية</h5>
						  <p> يمكن للمستخدمين الانضمام إلى مجموعات قراءة، مناقشة الكتب مع الأعضاء الآخرين، والمشاركة في فعاليات وورش عمل ذات صلة. </p>
							
						</div>
        </div>
        <div className="library__num__item border border-solid border-[#ccc] feature bg-[#fff] py-[10px] px-[20px] rounded-[12px] flex justify-center flex-col items-center gap-5">
            <div className="shapeBg">
							<NextImage
                src='https://roqay.com/wp-content/themes/Roqay/assets/images/icon-red.png'
                className="mov !h-[100px]"
              />
              <span></span>
              <svg className="mov" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M12 17.5H12.01M12.5 17.5C12.5 17.7761 12.2761 18 12 18C11.7239 18 11.5 17.7761 11.5 17.5C11.5 17.2239 11.7239 17 12 17C12.2761 17 12.5 17.2239 12.5 17.5Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 5.2C4 4.0799 4 3.51984 4.21799 3.09202C4.40973 2.71569 4.71569 2.40973 5.09202 2.21799C5.51984 2 6.0799 2 7.2 2H16.8C17.9201 2 18.4802 2 18.908 2.21799C19.2843 2.40973 19.5903 2.71569 19.782 3.09202C20 3.51984 20 4.07989 20 5.2V18.8C20 19.9201 20 20.4802 19.782 20.908C19.5903 21.2843 19.2843 21.5903 18.908 21.782C18.4802 22 17.9201 22 16.8 22H7.2C6.07989 22 5.51984 22 5.09202 21.782C4.71569 21.5903 4.40973 21.2843 4.21799 20.908C4 20.4802 4 19.9201 4 18.8V5.2Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

						</div>
						<div className="content flex justify-center items-center gap-1 flex-col">
							<h5 className="!text-[#533AD4] font-semibold text-[17px]"> توافق مع الأجهزة المختلفة</h5>
						  <p> المكتبة التفاعلية عادةً ما تكون متاحة عبر مختلف الأجهزة مثل الحواسيب، الهواتف الذكية، والأجهزة اللوحية، مما يسمح للمستخدمين بالوصول إلى كتبهم في أي وقت وأي مكان. </p>
							
						</div>
        </div>
        
      </div>
    </section>
  )
}

export default HomeLibraryNum