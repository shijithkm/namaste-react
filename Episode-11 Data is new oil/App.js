import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/componenets/Header";
import Body from "./src/componenets/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./src/componenets/About";
import Contact from "./src/componenets/Contact";
import Error from "./src/componenets/Error";
// import CardDetails from "./src/componenets/CardDetails";
const CardDetails = lazy(() => import("./src/componenets/CardDetails"));
import UserContext from "./src/utils/UserContext";

const AppLayout = () => {
  const [username, setUsername] = useState();

  useEffect(() => {
    // Make an api call to authenticate and receive user info back
    const data = { name: "Shijith Mohanan" };
    setUsername(data.name);
  }, []);

  return (
    <UserContext.Provider value={{ loggedInUser: username, setUsername }}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
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
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <CardDetails />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
