
import { ReadonlyURLSearchParams, usePathname, useSearchParams, useRouter } from "next/navigation";

import { useCallback } from 'react';
import { useClientRouter } from "../useClientRouter";

export const useSetSingleSearchParam = (): [
  ReadonlyURLSearchParams,
  (key: string, value: string) => void,
  (searchParams: { key: string, value: string }[]) => void
] => {
  const router = useClientRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()!


  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  const createQueryString = useCallback(
    (name: string, value: string) => {
      if (!searchParams) return ''
      const params = new URLSearchParams(searchParams as any)
      params.set(name, value)
      if (value === '') params.delete(name)
      return params.toString()
    },
    [searchParams]
  )

  const setSingleSearchParam = useCallback((key: string, value: string) => {
    const queryString = createQueryString(key, value)
    router.push(pathname + '?' + queryString)
  },
    [createQueryString, pathname, router]
  );

  const setMultipleSearchParam = useCallback((sparams: { key: string, value: string }[]) => {

    let queryString = ''
    if (searchParams) {
      const params = new URLSearchParams(searchParams)
      sparams.forEach(async ({ key, value }) => {
        params.set(key, value)
        if (value === '') params.delete(key)
      })
      queryString = '?' + params.toString()
    }


    // const queryString = searchParams
    //   .map(({ key, value }) => createQueryString(key, value))
    //   .join('&')
    router.push(pathname + queryString)

  },
    [pathname, router, searchParams]
  );

  return [searchParams, setSingleSearchParam, setMultipleSearchParam];
};
