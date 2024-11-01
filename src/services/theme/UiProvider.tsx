'use client'

import type { FC, ReactNode } from 'react';
import { ConfigProvider } from 'antd';
import antAr from 'antd/lib/locale/ar_EG';
import antEn from 'antd/lib/locale/en_US';
import { ANTD_THEME, ANTD_THEME_DARK } from "./constants";


import { useState } from 'react'
import { useServerInsertedHTML } from 'next/navigation'
import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs'
import { AntdRegistry } from '@ant-design/nextjs-registry';
import DarkModeProvider from "./DarkModeProvider";
import { useTheme } from "next-themes";


interface UiProviderProps {
  children: ReactNode;
  lang?: string;
}
const UiProvider: FC<UiProviderProps> = ({ children, lang = 'en' }) => {

  const [cache] = useState(() => createCache())

  const { resolvedTheme, theme, forcedTheme, systemTheme } = useTheme()

  useServerInsertedHTML(() => {
    return (
      <script
        dangerouslySetInnerHTML={{
          __html: `</script>${extractStyle(cache)}<script>`,
        }}
      />
    )
  })



  return (
    <AntdRegistry>
      <ConfigProvider locale={lang === 'ar' ? antAr : antEn} theme={resolvedTheme === 'dark' ? ANTD_THEME_DARK : ANTD_THEME}>
        <StyleProvider cache={cache}>{children}</StyleProvider>
      </ConfigProvider>
    </AntdRegistry>
  );
};

export default UiProvider;
