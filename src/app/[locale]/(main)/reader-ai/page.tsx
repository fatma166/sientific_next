import { MainReaderPage } from "@/components/landing"
import { getReaderFront } from "@/services/api"
import { getSeoMetaFromSettings } from "@/services/constants"
import { initServerPages } from "@/utils"
import { Metadata } from "next"

export async function generateMetadata(
    { params }: Readonly<{ params: { locale: string } }>,
): Promise<Metadata> {
    // read route params
    const lng = params?.locale !== 'ar' ? 'en' : 'ar'
    const metaData = await getSeoMetaFromSettings({
        lng,
        pageTitle: lng === 'ar' ? 'القارئ الذكي' : 'Reader AI',
    })

    return metaData
}



const Reader = async ({ params }: { params: { locale: string } }) => {
    initServerPages({ locale: params.locale })
    const data = await getReaderFront()

    return <>
        <MainReaderPage ReaderData={data} />
    </>
}

export default Reader