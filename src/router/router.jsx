import {
  createBrowserRouter,
} from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    Component:RootLayout,
    children: [
        {
            index: true,
            Component:Home
        },
        {
            path:"/login",
            Component:Login
        },
        {
            
        }
    ]
  },
]);