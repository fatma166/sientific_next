import MainLogin from "@/components/auth/MainLogin";
import { initServerPages } from "@/utils";


export default async function Page({ params }: { params: { locale: string } }) {
  initServerPages({ locale: params.locale })
  return <>
    <MainLogin />
  </>
}
