import { FC } from "react";
import useBooksLayoutContext from "../../hooks/useBooksLayoutContext";

const BooksListLayout: FC = () => {
  const { books, layout } = useBooksLayoutContext();
  if (layout !== "LIST") return null;
  return (
    <div className="flex-1 flex flex-col items-stretch justify-start">
      {books.map((book) => {
        return (
          <div className="flex flex-row items-center justify-between">
            <span>{book.title}</span>
            <span>{book.status}</span>
          </div>
        );
      })}
    </div>
  );
};

export default BooksListLayout;
