import React from "react";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Watch from "./components/Watch";
import Feed from "./components/Feed";

import { createBrowserRouter, RouterProvider } from "react-router-dom"; 

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Feed />
      },
      {

        path: "/watch",
        element: <Watch />
      }
    ]
  }
])

const App = () => {
  return (
    <div>
      <Navbar />
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default App;
