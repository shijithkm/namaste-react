# What i learned from Episode-07 Finding the path ? 🚀

# Dependency Array in useEffect

- useEffect(() => { console.log("Use Effect Called"); }); => If no depdendency array useEffect => call all every render
- useEffect(() => { console.log("Use Effect Called"); },[]); => If depdendency array is empty => useEffect call only on initial render
- useEffect(() => { console.log("Use Effect Called"); },[variable]); => If depdendency array with variable => useEffect call only on vaiable changes and initial render
- useEffect cannot called outside the componenet, it meant to create a local state vaiable inside the component
- Always create state variable on top of your componenet
- Should not create state variable with in condition/loop/function which create inconsistency

# Router

- Import react-router-dom from npm
- Create Configuration = >
  import { createBrowserRouter } from "react-router-dom";
  const appRouter = createBrowserRouter([
  {
  path: "/",
  element: <AppLayout />,
  errorElement: <Error />, // This allows to set error page incase any error
  },
  {
  path: "/about",
  element: <About />,
  },
  ]);
- Set Router Provider
  root.render(<RouterProvider router={appRouter} />);
- import { useRouteError } from "react-router-dom"; => This hook allow you to get more info about the error

- Children routes => Allow header stick and body change based on route
  Outlet will help you to fill children according to route
  import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
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
  ],
  },
  ]);

  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<RouterProvider router={appRouter} />);

- Create Link which helps to route without refreshing the page
  import { Link } from "react-router-dom";

- Client Side Routing =>
- Server Side Routing => it make a network call and pull the page from server

# Dynamic Routes

- useParams => Read parm from url

# Link => Behind the sceane its a anchor tag
