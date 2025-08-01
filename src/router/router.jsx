import {
  createBrowserRouter,
} from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import SignUp from "../pages/signUp/SignUp";
import AuthLayout from "../layouts/AuthLayout";
import Error from "../pages/sheard/error";
import TaskList from "../pages/taskList/TaskList";
import AddTask from "../pages/addTask/AddTask";
import TaskDetails from "../pages/taskDetails/TaskDetails";
import PrivateRoute from "../routes/PrivateRoute";
import TaskEdit from "../pages/taskEdit/TaskEdit";

export const router = createBrowserRouter([
  {
    path: "/",
    Component:AuthLayout,
    errorElement: <Error></Error>,
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
            path:"/signUp",
            Component:SignUp
        },
    ]
  },
  {
    path:"/dashboard",
    element:<PrivateRoute><RootLayout></RootLayout></PrivateRoute>,
    children:[
      {
        path:'taskList',
        element:<TaskList></TaskList>
      },
      {
        path:'addTask',
        element:<AddTask></AddTask>
      },
      {
        path:'taskDetails/:id',
        element:<TaskDetails></TaskDetails>
      },
      {
        path:'taskEdit/:id',
        element:<TaskEdit></TaskEdit>
      }
    ]
  }
  
]);