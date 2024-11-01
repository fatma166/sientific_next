import { LibraryBook } from "./library";



export interface CartBookItem {
  id: number;
  book_id: number;
  price: number;
  total_price: number;
  quantity: number;
  title: string;
  image: string;
  created_at: string;
}


export interface CartItemsRes {
  status: boolean;
  message: string;
  data: {
    main_request: {
      id: number;
      Uuid: string;
      client_id: number;
      price: number;
      discount: number;
      final_price: number;
      status: number;
      status_as_string: string;
      created_at: string;
    }
    items: CartBookItem[]

  }
}