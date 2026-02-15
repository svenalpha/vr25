/* eslint-disable react-refresh/only-export-components */
import type { RouteObject } from "react-router-dom";
import loadable from '@loadable/component'

import Layout from "@core/components/Layout/Layout";
import Home from "@screens/Home/Home";
import homeLoader from "@loaders/homeLoader";
import About from "@screens/About/About";
import Extra from "@screens/Extra/Extra";
import Plus from "@screens/Plus/Plus";
import Detail from "@screens/Detail/Detail";

const Contact = loadable(() => import("@screens/Contact/Contact"), { fallback: <div>Loading...</div> });

const routes: RouteObject[] = [
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />,
                loader: homeLoader  
            }, {
                path: "about",
                element: <About />,
            },
            {
                path: "contact/:iddd",
                element: <Contact />
            },
            {
                path: "extra",
                element: <Extra />
            },
            {
                path: "plus",
                element: <Plus />
            },  
            {
                path: "detail/:idd",
                element: <Detail />
            },      

        ]
    }
]

export default routes;