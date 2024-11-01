"use client"

import { useGetProfileQuery } from "@/services/api"
import { ProfileResponse, UserProfile } from "@/services/types"
import React from 'react'

const ProfileInit = ({ initialData }: { initialData?: ProfileResponse | null }) => {
  useGetProfileQuery({ initialData })
  return <></>
}

export default ProfileInit