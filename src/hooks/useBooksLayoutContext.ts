import { useContext } from "react";
import { BooksLayoutContext } from "../contexts/BooksLayoutContext";

const useBooksLayoutContext = () => {
  const context = useContext(BooksLayoutContext);
  if (!context) throw new Error("Books layout is null");
  return context;
};

export default useBooksLayoutContext;
