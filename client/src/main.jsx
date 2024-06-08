import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import CarContextProvider from "./contexts/CarContext";
import "./index.css";
import router from "./routers/RootRoutes";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CarContextProvider>
      <RouterProvider router={router} />
    </CarContextProvider>
  </React.StrictMode>
);
