"use client"
import React from 'react'
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"

const DarkModeProvider = ({ children, ...props }: ThemeProviderProps) => {
  return <NextThemesProvider
    attribute="class"
    defaultTheme="light"
    enableSystem
    disableTransitionOnChange
    {...props}>
    {children}
  </NextThemesProvider>
}

export default DarkModeProvider