import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const useThemeContext = () => {
  const themeContext = useContext(ThemeContext);
  if (!themeContext) throw new Error("No Theme Context");
  return themeContext;
};

export default useThemeContext;
