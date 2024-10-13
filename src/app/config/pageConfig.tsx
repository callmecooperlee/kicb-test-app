import { APP_PAGES } from "@shared/consts/pages.ts";
import { HomePage } from "@pages/HomePage/HomePage.tsx";
import { AdminPage } from "@pages/AdminPage/AdminPage.tsx";
import { ExamplePage } from "@pages/ExamplePage/ExamplePage.tsx";
import { CreditOnePage } from "@pages/CreditOnePage/CreditOnePage.tsx";
import { CreditTwoPage } from "@pages/CreditTwoPage/CreditTwoPage.tsx";
import { Navigate } from "react-router-dom";
import React from "react";

export const defaultsRoutes = [
    {
        id: 1,
        index: true,
        path: APP_PAGES.HOME,
        element: <HomePage />,
    },
    {
        id: 2,
        index: false,
        path: APP_PAGES.TABLES,
        element: <AdminPage />,
    },
    {
        id: 3,
        index: false,
        path: APP_PAGES.EXAMPLE,
        element: <ExamplePage />,
    },
    {
        id: 4,
        index: false,
        path: APP_PAGES.CREDIT_ONE,
        element: <CreditOnePage />,
    },
    {
        id: 5,
        index: false,
        path: APP_PAGES.CREDIT_TWO,
        element: <CreditTwoPage />,
    },
    {
        id: 0,
        index: false,
        path: APP_PAGES.ALL,
        element: <Navigate to={APP_PAGES.HOME} replace />,
    },
];
