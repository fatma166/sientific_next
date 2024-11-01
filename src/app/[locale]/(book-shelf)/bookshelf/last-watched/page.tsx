

import { MainBookshelfFavoritePage } from "@/components/bookshelf"
import MainBookshelfLastWatchedPage from "@/components/bookshelf/lastWatched/MainBookshelfLastWatchedPage"
import { GET_DEFAULT_SEO_META } from "@/services/constants"
import { initServerPages } from "@/utils"

const defaultMetaData = GET_DEFAULT_SEO_META({})

export const metadata = {
  ...defaultMetaData,
  title: 'Book Shelf - Last Watched - ' + defaultMetaData.title,
}

const Page = ({ params }: { params: { locale: string } }) => {
  initServerPages({ locale: params.locale })
  return <MainBookshelfLastWatchedPage />
}

export default Page