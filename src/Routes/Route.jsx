
import {
  createBrowserRouter,
  
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Registration from "../Pages/Registration/Registration";
import Login from "../Pages/Login/Login";
import Error from "../ErrorPage/Error";
import Dashboard from "../Layout/Dashboard";
import PrivateProvider from "../Provider/PrivateProvider";
import AddTask from "../Pages/AddTask/AddTask";
import UserDashboard from "../Pages/Dashboard/UserDashboard";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<Error></Error>,
    children:[
      {
        path:'/',
        element:<Home></Home>

      },
      {
        path:'/register',
        element:<Registration></Registration>

      },
      {
        path:'/login',
        element:<Login></Login>

      },
      // {
      //   path:'/dashboard',
      //   element:<PrivateProvider><Dashboard></Dashboard></PrivateProvider>

      // }
    ],
  },
  {
    path:'dashboard',
    element:<PrivateProvider><Dashboard></Dashboard></PrivateProvider>,
    children:[
       {
        path:"addTask",
        element:<AddTask></AddTask>
       },
       {
        path:"userDashboard",
        element:<UserDashboard></UserDashboard>
       }
    ]
  }
]);

export default router;