
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { AuthProvider } from "../src/services/authContext";
import { Bounce, ToastContainer } from "react-toastify";
import  routers from "../src/routers/index";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Suspense fallback="Loading">
        <AuthProvider>
          <>
            <RouterProvider router={routers} />
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              closeOnClick
              pauseOnHover
              draggable
              draggablePercent={60}
              transition={Bounce}
            />
          </>
        </AuthProvider>
      </Suspense>
    </QueryClientProvider>
  </StrictMode>
);
