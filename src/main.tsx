import React from "react";
import ReactDOM from "react-dom/client";
import "normalize.css";
import "./index.css";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import { AppContextProvider } from "./contexts/AppContext";
import { RouterProvider } from "react-router-dom";
import AppRouter from "./AppRouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeContextProvider>
        <AppContextProvider>
          <RouterProvider router={AppRouter} />
        </AppContextProvider>
      </ThemeContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
