import React from "react";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
// import { AuthContextProvider } from "./context/AuthContext";
import router from "./router.jsx";

const domNode = document.getElementById("root");
const root = createRoot(domNode);
root.render(
    // <AuthContextProvider>
    <RouterProvider router={router} />
    // </AuthContextProvider>
);
