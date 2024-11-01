import type { Metadata } from "next";

import { MainFooter, MainHeader } from "@/components/layout";

import { MainGDPRCookie } from "@/libs/GDPRCookie";

export const revalidate = 3600 // revalidate at most every hour



export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <>
      <MainHeader />
      {children}

      <MainFooter />

      <MainGDPRCookie ScriptsToLoad={<>
      </>} />
    </>


  );
}
