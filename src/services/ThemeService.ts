import { IColorScheme } from "../reducers/themeContextReducer";

export function renderTheme(colorScheme: IColorScheme) {
  if (colorScheme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}
