import { FC, PropsWithChildren, createContext } from "react";
import { IBooksLayout } from "../types/General-Types";

export interface IBooksLayoutContext extends IBooksLayout {
  is_loading: boolean;
}

export const BooksLayoutContext = createContext<IBooksLayoutContext | null>(
  null
);

interface PropType extends PropsWithChildren {
  value: IBooksLayoutContext;
}

export const BooksLayoutContextProvider: FC<PropType> = ({
  value,
  children,
}) => {
  return (
    <BooksLayoutContext.Provider value={value}>
      {children}
    </BooksLayoutContext.Provider>
  );
};
