"use client"
import React, { useState } from 'react'
import { ButtonGhost } from "../ui"
import { useGetProfileQuery } from "@/services/api"
import { CardLoader } from "../shared/loaders"
import { ErrorMessage } from "../shared"
import { useLanguage } from "@/services/hooks"
import BasicModal from "../shared/BaseModal"
import EditProfileForm from "./EditProfileForm"

const MainProfilePage = () => {

  const { data, isLoading, error, refetch } = useGetProfileQuery({})

  const { t } = useLanguage()

  const [showEditForm, setShowEditForm] = useState(false)


  if (isLoading) return <CardLoader />
  if (error) return <ErrorMessage error={error} refetch={refetch} />

  if (!data?.data) return null

  return (
    <div>
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <h2 className="text-lg font-bold">  {t('personal_account')}</h2>

        <ButtonGhost size="small" className="!px-3"
          onClick={() => setShowEditForm(!showEditForm)}
        >
          {t('edit_profile')}
        </ButtonGhost>
      </div>

      <div className="mt-4 grid grid-cols-2 max-w-sm gap-3 [&>h4]:font-bold">

        <h4> {t('name')}  </h4>
        <p>
          {data?.data?.name} ({data?.data?.user_name})

        </p>


        <h4> {t('email')} </h4>
        <p>
          {data?.data?.email}
        </p>

        <h4> {t('phone_number')} </h4>
        <p>
          {data?.data?.phone}
        </p>
        {/* 
        <h4> تاريخ الميلاد  </h4>
        <p>
          dddd
        </p> */}
        {/* 
        <h4> تاريخ التسجيل  </h4>
        <p> 20-11-2020 </p> */}


      </div>

      <BasicModal open={showEditForm} close={() => setShowEditForm(false)} title={t('edit_profile')}
        width={720}
      >
        <EditProfileForm close={() => setShowEditForm(false)} profile={data?.data} refetch={refetch} />
      </BasicModal>


    </div>
  )
}

export default MainProfilePage