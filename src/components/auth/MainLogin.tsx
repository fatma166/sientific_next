"use client"
import { useLanguage } from "@/services/hooks"
import React from 'react'
import { ClientLink } from "../shared"
import LoginForm from "./forms/LoginForm"
import { Button } from "../ui"
import { FaFacebookF, FaGoogle } from "react-icons/fa6"
import { Divider } from "antd"

const MainLogin = () => {
  const { t } = useLanguage()
  return (
    <div className="flex items-center justify-center flex-col gap-4  py-3">

      <h1 className="font-bold text-center text-xl mb-2"> {t('login')}   </h1>

      <LoginForm />

      <Divider className="!m-0" />
      <div>
        <p className="text-text"> {t('or_login_by')} </p>

        <div className="flex flex-wrap items-center justify-center gap-3 mt-3">
          <Button size="large" className="!bg-primary-darker hover:!bg-primary-dark !border-none  font-bold !py-3 !px-2.5 !h-auto ">
            <div className="flex items-center gap-2 justify-center font-bold text-base text-primary">
              <FaGoogle size={20} />
            </div>
          </Button>

          <Button size="large" className="!bg-primary-darker hover:!bg-primary-dark !border-none  font-bold !py-3 !px-2.5 !h-auto ">
            <div className="flex items-center gap-2 justify-center font-bold text-base text-primary">
              <FaFacebookF size={20} />
            </div>
          </Button>
        </div>

      </div>

      <Divider className="!m-0" />

      <div>
        {t('dont_have_an_account')}? <ClientLink href='/register' className="text-primary"> {t('new_account')} </ClientLink>
      </div>
    </div>
  )
}

export default MainLogin