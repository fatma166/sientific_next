import { FrontLibraryRes } from "@/services/types"
import clientApi from "../../clientApi"



export const getFrontLibrary = async () => {
  const res = await clientApi.get<FrontLibraryRes>(`/library`)
  return res?.data
}
