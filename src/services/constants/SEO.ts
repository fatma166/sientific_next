import { Metadata } from "next"
import { getFrontSettings } from "../api"

export const WEBSITE_URL = 'https://website.com'
export const SEO_TITLE = `منصة الفكر العلمي`

export const SEO_DESCRIPTION = 'Website description'

export const SEO_KEYWORDS = 'Website keywords, Website keywords'


export const SEO_IMAGE = 'og-image.jpg'
export const SEO_IMAGE_ALT = 'Website name'


export const GET_DEFAULT_SEO_META = ({
  title = SEO_TITLE,
  description = SEO_DESCRIPTION,
  keywords = SEO_KEYWORDS,
  og_image = SEO_IMAGE,
  og_image_alt = SEO_IMAGE_ALT
}): Metadata => {
  return {
    title,
    description,
    keywords,

    openGraph: {
      locale: 'ar_EG',
      title,
      description,
      siteName: SEO_TITLE,
      type: 'website',
      url: WEBSITE_URL,
      images: [
        {
          url: og_image,
          width: 1200,
          height: 630,
          alt: og_image_alt,

        }
      ]
    },
    twitter: {
      title,
      description,
      card: 'summary_large_image',
      images: [
        {
          url: og_image,
          width: 1200,
          height: 630,
          alt: og_image_alt,
        }
      ]
    },
    // icons: {
    //   // shortcut: '/icon.svg',

    // }
  }
}


export const getSeoMetaFromSettings = async ({
  lng,
  pageTitle = '',
}: {
  lng: 'ar' | 'en'
  pageTitle?: string
}) => {
  const defaultMetaData = GET_DEFAULT_SEO_META({})
  try {
    const settings = await getFrontSettings()

    const metaTitle = settings?.data[('meta_title_' + lng) as 'meta_title_ar' | 'meta_title_en'] || settings?.data?.meta_title || ''
    const appTitle = settings?.data[('app_name_' + lng) as 'app_name_ar' | 'app_name_en'] || settings?.data?.app_name || ''


    const metaDescription = settings?.data[('meta_description_' + lng) as 'meta_description_ar' | 'meta_description_en'] || settings?.data?.meta_description || ''

    const appDescription = settings?.data[('detail_' + lng) as 'detail_ar' | 'detail_en'] || settings?.data?.details || ''

    let title = metaTitle || appTitle

    if (pageTitle) {
      title = `${pageTitle} - ${title}`
    }
    return {
      ...defaultMetaData,
      title,
      description: metaDescription || appDescription,
      og_image: settings?.data?.image || SEO_IMAGE,

    }


  } catch (error) {
    return defaultMetaData
  }

}