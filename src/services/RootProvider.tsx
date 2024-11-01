'use client'
import { FC, ReactNode, useEffect } from 'react'
import { DarkModeProvider, UiProvider } from "./theme";
import { ReactQueryProvider } from "./api/ReactQueryProvider";
import clientApi from "./api/clientApi";


interface RootProviderProps {
  children: ReactNode;
  lang?: string;
  token?: string
}

const RootProvider: FC<RootProviderProps> = ({ children, lang, token }) => {

  useEffect(() => {
    if (token) {
      clientApi.defaults.headers.common['Authorization'] = `Bearer ${token}`
    } else {
      clientApi.defaults.headers.common['Authorization'] = ''
    }
  }, [token])
  return (
    <DarkModeProvider>
      <ReactQueryProvider>
        <UiProvider lang={lang}>
          {children}
        </UiProvider>
      </ReactQueryProvider>
    </DarkModeProvider>
  )
}

export default RootProvider