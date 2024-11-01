
import MainRegister from "@/components/auth/MainRegister";
import { initServerPages } from "@/utils";


export default async function Page({ params }: { params: { locale: string } }) {
  initServerPages({ locale: params.locale })
  return <>
    <MainRegister />
  </>
}
