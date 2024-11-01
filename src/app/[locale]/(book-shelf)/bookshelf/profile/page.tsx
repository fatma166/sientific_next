

import { MainBookshelfFavoritePage } from "@/components/bookshelf"
import MainBookshelfLastWatchedPage from "@/components/bookshelf/lastWatched/MainBookshelfLastWatchedPage"
import { MainProfilePage } from "@/components/profile"
import { GET_DEFAULT_SEO_META } from "@/services/constants"
import { initServerPages } from "@/utils"

const defaultMetaData = GET_DEFAULT_SEO_META({})

export const metadata = {
  ...defaultMetaData,
  title: 'Profile - ' + defaultMetaData.title,
}

const Page = ({ params }: { params: { locale: string } }) => {
  initServerPages({ locale: params.locale })
  return <div className="container mt-12">
    <div className=" bg-bg p-4 md:p-6 lg:py-8 rounded-lg">
      <MainProfilePage />
    </div>

  </div>
}

export default Page