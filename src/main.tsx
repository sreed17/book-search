import React from "react";
import ReactDOM from "react-dom/client";
import "normalize.css";
import "./index.css";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import { AppContextProvider } from "./contexts/AppContext";
import { RouterProvider } from "react-router-dom";
import AppRouter from "./AppRouter";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <AppContextProvider>
        <RouterProvider router={AppRouter} />
      </AppContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);
