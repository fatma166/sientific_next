
import { MainHomePage } from "@/components/landing";
import { getHomeFront } from "@/services/api";
import clientApi from "@/services/api/clientApi";
import { initServerPages } from "@/utils";
export default async function Page({ params }: { params: { locale: string } }) {
  initServerPages({ locale: params.locale })

  const homeData = await getHomeFront()

  return <>
    <MainHomePage homeData={homeData} />
  </>
}
