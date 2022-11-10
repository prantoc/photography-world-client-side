import { createBrowserRouter } from "react-router-dom";
import Login from "../../components/Auth/Login/Login";
import SignUp from "../../components/Auth/SignUp/SignUp";
import Blog from "../../components/Blog/Blog";
import Error from "../../components/Error/Error";
import Home from "../../components/Home/Home";
import MyReview from "../../components/Reviews/MyReview/MyReview";
import AddService from "../../components/Service/AddService/AddService";
import ServiceDetails from "../../components/Service/ServiceDetails/ServiceDetails";
import Services from "../../components/Service/Services/Services";
import Layout from "../../layout/Layout";
import PrivateRoutes from "../PrivateRoute/PrivateRoutes";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/service/:id',
                loader: ({ params }) => fetch(`https://b6a11-service-review-server-side-prantoc.vercel.app/service/${params.id}`),
                element: <ServiceDetails></ServiceDetails>
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: "/add-service",
                element: <PrivateRoutes><AddService></AddService></PrivateRoutes>
            },
            {
                path: "/my-reviews",
                element: <PrivateRoutes><MyReview></MyReview></PrivateRoutes>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>
            },
        ]
    },
]);