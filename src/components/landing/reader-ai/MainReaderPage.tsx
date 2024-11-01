"use client"
import React from 'react'
import HomeAi from "../Home/HomeAi"
import { ApiReaderResponse } from "@/services/types"
import { useGetReaderFrontQuery } from "@/services/api"
import { CardLoader } from "@/components/shared/loaders"
import { ErrorMessage } from "@/components/shared"



const MainReaderPage = ({ ReaderData }: { ReaderData: ApiReaderResponse }) => {

  
  const { data, isLoading, error, refetch } = useGetReaderFrontQuery({ initialData: ReaderData })

  if (isLoading) return <CardLoader num={4} />
  if (error) return <ErrorMessage error={error} refetch={refetch} />
  if (!data?.data) return null

  return (
    <main>
      {!!data?.data?.main_section && <HomeAi data={data?.data} />}
    </main>
  )
}

export default MainReaderPage