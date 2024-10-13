import React from "react";
import { Navigate } from "react-router-dom";

import { AdminPage } from "@pages/AdminPage";
import { CreditOnePage } from "@pages/CreditOnePage";
import { HomePage } from "@pages/HomePage";
import { CreditTwoPage } from "@pages/CreditTwoPage";

import { APP_PAGES } from "@shared/consts/pages.ts";

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
        path: APP_PAGES.CREDIT_ONE,
        element: <CreditOnePage />,
    },
    {
        id: 4,
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
