import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "./components/Root";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Contact from "./components/Contact";
import About from "./components/About";
import BuyBeans from "./components/BuyBeans";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: "cardapio", element: <Menu /> },
      { path: "contato", element: <Contact /> },
      { path: "sobre", element: <About /> },
      { path: "compre-graos", element: <BuyBeans /> },
    ],
  },
]);
