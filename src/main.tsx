import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext.tsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <LanguageProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </LanguageProvider>
    </BrowserRouter>
  </React.StrictMode>
);
