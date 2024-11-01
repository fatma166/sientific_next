import type { Metadata } from "next";
import { Poppins, Almarai } from "next/font/google";
import "../globals.css";
import RootProvider from "@/services/RootProvider";
import { MainFooter, MainHeader } from "@/components/layout";
import { GET_DEFAULT_SEO_META, getSeoMetaFromSettings } from "@/services/constants";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Suspense } from "react";
import Loading from "./loading";
import { getFrontSettings, getProfile } from "@/services/api";
import MainSettingsCache from "@/components/landing/MainSettingsCache";
import { cookies } from 'next/headers';
import ProfileInit from "@/components/auth/ProfileInit";
import clientApi from "@/services/api/clientApi";
import axios from "axios";
import Fav from "@/assets/images/fav.png"
export const revalidate = 3600 // revalidate at most every hour


const poppins = Poppins({ subsets: ["latin"], weight: ['300', '400', '500', '600', '700'] });
const almarai = Almarai({ subsets: ["arabic"], weight: ['300', '400', '700', '800'] });


export async function generateMetadata(
  { params }: Readonly<{ params: { locale: string } }>,
): Promise<Metadata> {
  // read route params

  const metaData = await getSeoMetaFromSettings({
    lng: params?.locale !== 'ar' ? 'en' : 'ar',
  })

  return metaData
}


export default async function RootLayout({
  children, params: { locale }
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };


}>) {

  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value || ""

  if (token) {
    clientApi.defaults.headers.common['Authorization'] = `Bearer ${token}`
  }
  const lang = locale === 'en' ? 'en' : 'ar'
  clientApi.defaults.headers.common['Accept-Language'] = lang

  const messagesPromise = getMessages();
  const settingsPromise = getFrontSettings()
  const profilePromise = getProfile()


  const [messages, settings, profile] = await Promise.all([messagesPromise, settingsPromise, profilePromise])

  if (!lang) return null

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>

      <link rel="icon" href="@/assets/images/fav.png" sizes="any" />

      <body className={locale === 'ar' ? almarai.className : poppins.className}>
        <RootProvider lang={locale} token={token} >
          <ProfileInit initialData={profile} />
          <NextIntlClientProvider messages={messages}>
            <Suspense fallback={<Loading />}>
              <MainSettingsCache settings={settings} />
              {children}
            </Suspense>
          </NextIntlClientProvider>
        </RootProvider>
      </body>
    </html>
  );
}
