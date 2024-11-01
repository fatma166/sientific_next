

import { MainBookshelfHomePage } from "@/components/bookshelf"
import { MainContactPage } from "@/components/landing"
import { GET_DEFAULT_SEO_META } from "@/services/constants"
import { initServerPages } from "@/utils"

const defaultMetaData = GET_DEFAULT_SEO_META({})

export const metadata = {
  ...defaultMetaData,
  title: 'Book Shelf - ' + defaultMetaData.title,
}

const Page = ({ params }: { params: { locale: string } }) => {
  initServerPages({ locale: params.locale })
  return <MainBookshelfHomePage />
}

export default Page