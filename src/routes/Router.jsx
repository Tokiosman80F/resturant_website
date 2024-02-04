import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Login/Login";
import Shop from "../pages/Shop/Shop";
import Menu from "../pages/Menu/Menu";
import Dashboard from "../pages/Dashboard/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path:"/contact",
        element:<Contact></Contact>
      },
      {
        path:"/dashboard",
        element:<Dashboard></Dashboard>
      },
      {
        path:"/menu",
        element:<Menu></Menu>
      },
      {
        path:"/shop",
        element:<Shop></Shop>
      },
      {
        path:"/login",
        element:<Login></Login>
      }
    ],
  },
]);
