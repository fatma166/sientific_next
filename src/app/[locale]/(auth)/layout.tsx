import { MainFooter, MainHeader } from "@/components/layout";
import { MainGDPRCookie } from "@/libs/GDPRCookie";
import type { Metadata } from "next";


export const revalidate = 3600 // revalidate at most every hour

import authImg from '@/assets/images/auth-bg.jpg'


export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <>
      <MainHeader />
      <main className="min-h-[80vh] py-6 md:py-9 lg:py-12 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${authImg.src})`,
        }}
      >
        <div className="container flex items-center justify-center">
          <div className="w-full max-w-sm md:max-w-md xl:max-w-lg bg-bg/80 rounded-lg p-4 lg:p-6 border-text-10 backdrop-blur">
            {children}
          </div>
        </div>
      </main>
      <MainFooter />
      <MainGDPRCookie ScriptsToLoad={<>
      </>} />
    </>


  );
}
