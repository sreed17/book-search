import { FC } from "react";
import useBooksLayoutContext from "../../hooks/useBooksLayoutContext";

const BooksGridLayout: FC = () => {
  const { books, layout } = useBooksLayoutContext();
  if (layout !== "GRID") return null;
  return (
    <div className="grid grid-cols-4 place-content-center place-items-center gap-4">
      {books.map((book) => {
        return (
          <div className="flex flex-col items-stretch justify-center">
            <div className="w-[200px] h-[360px] overflow-hidden">
              <img
                src={book.thumbnail_image}
                className="w-full h-full object-cover"
              />
            </div>
            <span>{book.title}</span>
          </div>
        );
      })}
    </div>
  );
};

export default BooksGridLayout;
