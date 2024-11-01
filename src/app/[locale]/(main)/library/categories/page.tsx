import { MainCategoriesPage } from "@/components/landing";
import { getBooks } from "@/services/api/books";
import { SEARCH_PARAMS_NAMES } from "@/services/constants";
import { initServerPages } from "@/utils";
export default async function Page({ searchParams, params }: any) {



  initServerPages({ locale: params.locale })

  const search = searchParams?.[SEARCH_PARAMS_NAMES.search] || ''
  const category = searchParams?.[SEARCH_PARAMS_NAMES.category_slug] || ''
  const page = searchParams?.[SEARCH_PARAMS_NAMES.page] ? Number(searchParams?.[SEARCH_PARAMS_NAMES.page]) : 1

  const booksPromise = getBooks({ page, search, category })
  const [booksData] = await Promise.all([booksPromise])
  return <>
    <MainCategoriesPage initialData={booksData} page={page} category={category} search={search} />
  </>

}
