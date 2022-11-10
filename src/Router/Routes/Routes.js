import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddService from "../../Pages/AddService/AddService";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import MyReview from "../../Pages/MyReview/MyReview";
import Register from "../../Pages/Register/Register";
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/details/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) =>
                    fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/myreview',
                element: <MyReview></MyReview>
            },
            {
                path: '/addservice',
                element: <AddService></AddService>
            }
        ]
    },
    {
        path: '/register',
        element: <Register></Register>
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/blog',
        element: <Blog></Blog>
    },

])

export default router;