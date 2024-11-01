import { MainLibraryPage } from "@/components/landing";
import { getFrontLibrary } from "@/services/api";
import { initServerPages } from "@/utils";
export default async function Page({ params }: { params: { locale: string } }) {
  initServerPages({ locale: params.locale })

  const libraryData = await getFrontLibrary()
  return <>
    <MainLibraryPage libraryData={libraryData} />
  </>
}
