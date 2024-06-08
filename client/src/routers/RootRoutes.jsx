import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../layout/RootLayout";
import Home from "../pages/Home";
import Invoice from "../pages/Invoice";
import Rental from "../pages/Rental";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "rental",
        element: <Rental />,
      },
      {
        path: "invoice",
        element: <Invoice />,
      },
    ],
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);

export default router;
