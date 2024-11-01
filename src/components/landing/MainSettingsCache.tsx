"use client"
import { useGetFrontSettingsQuery } from "@/services/api"
import { FrontSettingsRes } from "@/services/types"
import React from 'react'

const MainSettingsCache = ({ settings }: { settings: FrontSettingsRes }) => {

  useGetFrontSettingsQuery({ initialData: settings })



  return null
}

export default MainSettingsCache