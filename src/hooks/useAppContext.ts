import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

const useAppContext = () => {
  const appContext = useContext(AppContext);
  if (!appContext) throw new Error("No App Context ");
  return appContext;
};

export default useAppContext;
