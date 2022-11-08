import { createBrowserRouter } from "react-router-dom";
import Home from "../../components/Home/Home";
import Services from "../../components/Services/Services";
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
        ]
    },
]);