import { createBrowserRouter, Link } from "react-router-dom";
import Course from "../../layout/Course/Course";
import Mian from "../../layout/Main/Mian";
import Blog from "../Blog/Blog";

import Faq from "../Faq/Faq";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import CoursesItem from '../CoursesItem/CoursesItem'
import CourseDetails from "../CourseDetails/CourseDetails";

import CheckOut from "../CheckOut/CheckOut";
import PrivateRoutes from "./PrivateRoutes";
import ErrorPage from "../ErrorPage/ErrorPage";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Mian></Mian>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: 'courses',
                loader: () => fetch('https://codecamp-server.vercel.app/course'),
                element: <Course></Course>,
                children: [
                    {
                        path: '/courses/:id',
                        loader: ({ params }) => fetch(`https://codecamp-server.vercel.app/course/${params.id}`),
                        element: <CoursesItem></CoursesItem>
                    },
                    {
                        path: 'details/:id',
                        loader: ({ params }) => fetch(`https://codecamp-server.vercel.app/course/${params.id}`),
                        element: <CourseDetails></CourseDetails>
                    },
                    {
                        path: 'checkout/:id',
                        loader: ({ params }) => fetch(`https://codecamp-server.vercel.app/course/${params.id}`),
                        element: <PrivateRoutes><CheckOut></CheckOut></PrivateRoutes>
                    },

                ]
            },

            {
                path: 'faq',
                element: <Faq></Faq>
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },

        ]
    }
]);

export default router;