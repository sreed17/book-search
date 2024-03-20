import { FC, PropsWithChildren } from "react";
import { BooksLayoutContextProvider } from "../../contexts/BooksLayoutContext";
import {
  BOOKS_LAYOUTS,
  IBook,
  IBooksLayoutType,
} from "../../types/General-Types";
import { useSearchParams } from "react-router-dom";
import { isIBooksLayoutType } from "../../utils/common-type-checks";

interface PropType extends PropsWithChildren {}

const BooksLayout: FC<PropType> = ({ children }) => {
  const [searchParams] = useSearchParams();
  const _view = searchParams.get("view");
  const layout: IBooksLayoutType = isIBooksLayoutType(_view)
    ? _view
    : BOOKS_LAYOUTS[0];

  const data: IBook[] = [
    {
      title: "The Great Gatsby",
      description: "A novel by F. Scott Fitzgerald",
      rating: 4.5,
      link: "https://en.wikipedia.org/wiki/The_Great_Gatsby",
      keywords: ["fiction", "classic", "drama"],
      thumbnail_image: "https://source.unsplash.com/random/?book&seed=1",
      status: "NOT_READ",
    },
    {
      title: "To Kill a Mockingbird",
      description: "A novel by Harper Lee",
      rating: 4.7,
      link: "https://en.wikipedia.org/wiki/To_Kill_a_Mockingbird",
      keywords: ["fiction", "classic", "drama"],
      thumbnail_image: "https://source.unsplash.com/random/?book&seed=2",
      status: "READING",
    },
    {
      title: "1984",
      description: "A novel by George Orwell",
      rating: 4.8,
      link: "https://en.wikipedia.org/wiki/Nineteen_Eighty-Four",
      keywords: ["fiction", "dystopian", "political"],
      thumbnail_image: "https://source.unsplash.com/random/?book&seed=3",
      status: "NOT_READ",
    },
    {
      title: "Pride and Prejudice",
      description: "A novel by Jane Austen",
      rating: 4.6,
      link: "https://en.wikipedia.org/wiki/Pride_and_Prejudice",
      keywords: ["fiction", "classic", "romance"],
      thumbnail_image: "https://source.unsplash.com/random/?book&seed=4",
      status: "COMPLETED",
    },
    {
      title: "Harry Potter and the Philosopher's Stone",
      description: "A novel by J.K. Rowling",
      rating: 4.9,
      link: "https://en.wikipedia.org/wiki/Harry_Potter_and_the_Philosopher%27s_Stone",
      keywords: ["fiction", "fantasy", "magic"],
      thumbnail_image: "https://source.unsplash.com/random/?book&seed=5",
      status: "NOT_READ",
    },
  ];

  return (
    <BooksLayoutContextProvider
      value={{
        books: data,
        is_loading: true,
        layout,
      }}
    >
      {children}
    </BooksLayoutContextProvider>
  );
};

export default BooksLayout;
