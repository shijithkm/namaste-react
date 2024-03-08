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
import { Provider } from "react-redux";
import appStore from "./src/utils/appStore";
import Cart from "./src/componenets/Cart";

const AppLayout = () => {
  const [username, setUsername] = useState();

  useEffect(() => {
    // Make an api call to authenticate and receive user info back
    const data = { name: "Shijith Mohanan" };
    setUsername(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: username, setUsername }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
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
        path: "/cart",
        element: <Cart />,
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
