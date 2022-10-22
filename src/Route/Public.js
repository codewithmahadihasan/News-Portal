import { createBrowserRouter } from "react-router-dom";
import Main from "../Componemts/Main/Main";
import Catagory from "../Componemts/News/Catagoris/Catagory";
import News from "../Componemts/News/News";
import HomePage from "../Componemts/Pages/HomePage";
import Register from "../Componemts/User/Register";
import SignIn from "../Componemts/User/SignIn";
import Private from "./Private";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/home',
                loader: () => fetch("http://localhost:5000/home"),
                element: <HomePage></HomePage>,

            },
            {
                path: '/',
                loader: () => fetch("http://localhost:5000/home"),
                element: <HomePage></HomePage>,

            },
            {
                path: '/category/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`),
                element: <HomePage></HomePage>,

            }
            ,
            {
                path: '/news/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`),
                element: <Private><News></News></Private>
            },
            { path: '/login', element: <SignIn></SignIn> },
            { path: '/register', element: <Register></Register> }
        ]
    },
]);