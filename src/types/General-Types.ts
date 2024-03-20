export const BOOKS_LAYOUTS = ["GRID", "LIST"] as const;
export type IBooksLayoutType = (typeof BOOKS_LAYOUTS)[number];

export const BOOK_STATUS = ["READING", "COMPLETED", "NOT_READ"] as const;
export type IBookStatus = (typeof BOOK_STATUS)[number];

export interface IBook {
  title: string;
  description: string;
  rating: number;
  link: string;
  keywords: string[];
  thumbnail_image: string;
  status: IBookStatus;
}

export interface IBooksLayout {
  books: IBook[];
  layout: IBooksLayoutType;
}
