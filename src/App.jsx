import Nav from './header/nav';
import Hero from './hero_section/hero';
import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Contact from './Contact Us/Contact';
import About from './About Us/About';
import Blog from './Blog/Blog';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Hero/>
      ),
    },
    {
      path: "/contact",
      element:<Contact/>,
    },
    {
      path: "/aboutus",
      element:<About/>,
    },
    {
      path: "/blog",
      element:<Blog/>,
    },
  ]);
  return (
    <>
  <RouterProvider router={router} />
    </>
  )
}

export default App
