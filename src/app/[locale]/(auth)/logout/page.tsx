"use client"
import { GET_PROFILE_KEY } from "@/services/api";
import clientApi from "@/services/api/clientApi";
import { useClientRouter } from "@/services/hooks";
import { Skeleton } from "antd";
import axios from "axios";
import { cookies } from "next/headers";
import { redirect, useRouter } from 'next/navigation';
import { useEffect } from "react";
import { useQueryClient } from "react-query";

export default function Page() {

  const router = useClientRouter()
  const queryClient = useQueryClient()

  useEffect(() => {
    axios.post('/api/auth/session', { token: '' }).then(() => {
      clientApi.defaults.headers.common['Authorization'] = ''
      queryClient.invalidateQueries(GET_PROFILE_KEY)
      router.push('/login')
    })

  }, [])

  return <div className="flex items-center justify-center"> <Skeleton.Input active size="large" /> </div>
}
