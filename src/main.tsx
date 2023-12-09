import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-toastify/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter } from "react-router-dom";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ToastContainer
        position="top-center"
        autoClose={2500}
        hideProgressBar={true}
        closeButton={false}
        pauseOnHover
        newestOnTop={false}
        theme="colored"
      />
      <BrowserRouter>
        <App />
        <ReactQueryDevtools initialIsOpen={false} position="bottom" />
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
