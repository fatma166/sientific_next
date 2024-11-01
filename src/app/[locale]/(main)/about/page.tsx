
import { GET_DEFAULT_SEO_META } from "@/services/constants"
import { initServerPages } from "@/utils"
import React from 'react'


const defaultMetaData = GET_DEFAULT_SEO_META({
    description: `Discover the expertise of Dark Atlas and how we empower businesses with actionable threat intelligence.
  `,
    keywords: 'Threat intelligence experts',
    og_image_alt: 'Dark Atlas Team: Cyber Security Threat Intelligence Experts.',
})

export const metadata = {
    ...defaultMetaData,
    title: 'ABOUT - ' + defaultMetaData.title,
}

export default function page({ params }: { params: { locale: string } }) {
    initServerPages({ locale: params.locale })
    return (
        <div>
            ABOUT PAGE
        </div>
    )
}
