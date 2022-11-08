import { createBrowserRouter } from "react-router-dom";
import Home from "../../components/Home/Home";
import ServiceDetails from "../../components/Service/ServiceDetails/ServiceDetails";
import Services from "../../components/Service/Services/Services";
import Layout from "../../layout/Layout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
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
                path: '/services/details',
                element: <ServiceDetails></ServiceDetails>
            },
        ]
    },
]);