import { LoginClient } from "./auth";
import { HomeCategory, HomeSingleDetail } from "./home";
import { Pagination } from "./meta";



export interface LibraryBook {
  id: number;
  page_num: number;
  book_symbol?: string;
  category_id: number;
  price: number;
  category: string;
  lang_ids: number[];
  languages: {
    id: number;
    name: string;
    name_en: string;
    name_ar: string;
    created_at: string;
  }[];
  isbn?: number;
  image: string;

  file: string;
  status?: string;
  book_images: string[];
  publish_by?: string;
  publish_date: string;
  title: string;
  details: string;
  title_en: string;
  title_ar: string;
  detail_en: string;
  detail_ar: string;
  created_at: string;
  avg_rate?: number;
  is_favorite?: number;
  reader_url?: string;
}


export interface LibraryRateBook {
  id: number;
  category_id: number;
  category: string;
  image: string;
  file: string;
  title: string;
  title_en: string;
  title_ar: string;
  rating: number;
  review: string;
  created_at: string;
}


export interface LibraryBooksData {
  data: LibraryBook[]
}
export interface FrontLibrary {
  sliders: HomeSingleDetail[]
  category: HomeCategory[]
  most_sales: LibraryBooksData
  book_choices: LibraryBooksData
  book_latest_release: LibraryBooksData
  book_offers: LibraryBooksData
}

export interface FrontLibraryRes {
  status: boolean;
  message: string;
  data: FrontLibrary
}

export interface BookRate {
  client: LoginClient
  id: number
  rating: number
  review: string
}

export interface LibraryBookDetailsRes {
  status: boolean;
  message: string;
  data: {
    book: LibraryBook
    similar_books: { data: LibraryBook[] }
    rating: { data: BookRate[] }
  }
}


export interface ClientBooksRes {
  status: boolean;
  message: string;
  data: {
    data: LibraryBook[]
    pagination: Pagination
  }
}

export interface RateBooksRes {
  status: boolean;
  message: string;
  data: {
    data: BookRate[]
    pagination: Pagination
  }
}