import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/componenets/Header";
import Body from "./src/componenets/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./src/componenets/About";
import Contact from "./src/componenets/Contact";
import Error from "./src/componenets/Error";
import CardDetails from "./src/componenets/CardDetails";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "/details/:cardId",
        element: <CardDetails />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
