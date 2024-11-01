

import { MainContactPage } from "@/components/landing"
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
        pageTitle: lng === 'ar' ? 'اتصل بنا' : 'Contact us',
    })

    return metaData
}

const Contact = ({ params }: { params: { locale: string } }) => {
    initServerPages({ locale: params.locale })
    return <>
        <MainContactPage />
    </>
}

export default Contact