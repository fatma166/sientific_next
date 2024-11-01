import { MainSingleBook } from "@/components/landing";
import { getLibraryBookDetails } from "@/services/api";
import { initServerPages } from "@/utils";
export default async function Home({ params }: { params: { locale: string, slug?: string } }) {
  initServerPages({ locale: params.locale })
  if (!params?.slug) return <> </>
  const bookData = await getLibraryBookDetails({ id: params?.slug })
  return <>
    <MainSingleBook id={params?.slug} bookData={bookData} />
  </>
}
