import { MainSingleBook } from "@/components/landing";
import { MainBlogDetails } from "@/components/landing/blog";
import { initServerPages } from "@/utils";
export default function Page({ params }: { params: { locale: string } }) {
  initServerPages({ locale: params.locale })

  return <>
    <MainBlogDetails />
  </>
}
