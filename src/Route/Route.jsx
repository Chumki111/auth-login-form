import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Order from "../Pages/Order/Order";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
import Dashboard from "../Pages/Dashboard/Dashboard";


const myCreatedRoute = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children : [
            {
                path : '/',
                element : <Home></Home>
            },
            {
                path : '/login',
                element : <Login></Login>
            },
            {
                path : '/register',
                element : <Register></Register>
            },
            {
                path :'/order',
                element :<PrivetRoute><Order></Order></PrivetRoute>
            },
            {
                path : '/dashboard',
                element : <PrivetRoute><Dashboard></Dashboard></PrivetRoute>
            }
        ]
      },
])
export default myCreatedRoute;