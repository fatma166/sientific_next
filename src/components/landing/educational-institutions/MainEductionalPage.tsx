"use client"
import React from 'react'
import HomeManagement from "../Home/HomeManagement"
import UniversityPage from './UniversityPage'
import SecondSectionPage from './SecondSectionPage'
import { ApiEducationResponse } from "@/services/types"
import { useGetEducationFrontQuery } from "@/services/api"
import { CardLoader } from "@/components/shared/loaders"
import { ErrorMessage } from "@/components/shared"



const MainEductionalPage = ({ EducationData }: { EducationData: ApiEducationResponse }) => {


  const { data, isLoading, error, refetch } = useGetEducationFrontQuery({ initialData: EducationData })

  if (isLoading) return <CardLoader num={4} />
  if (error) return <ErrorMessage error={error} refetch={refetch} />
  if (!data?.data) return null



  return (
    <main>
      {!!data?.data?.main_section && <HomeManagement data={data?.data} />}
      {!!data?.data?.second_section && <SecondSectionPage data={data?.data?.second_section} />}
      {!!data?.data?.university && <UniversityPage data={data?.data?.university.data} />}
    </main>
  )
}

export default MainEductionalPage