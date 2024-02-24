import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Products from "./pages/Products.jsx";
import "./index.css";
import Customers from "./pages/Customers.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Products />,
  },
  {
    path: "/customers",
    element: <Customers />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <RouterProvider router={router} />
  </React.StrictMode>
);
