import { FC } from "react";
import BooksGridLayout from "../components/layouts/BooksGridLayout";
import BooksListLayout from "../components/layouts/BooksListLayout";
import BooksLayout from "../components/layouts/BooksLayout";

const Home: FC = () => {
  return (
    <BooksLayout>
      <BooksGridLayout />
      <BooksListLayout />
    </BooksLayout>
  );
};

export default Home;
