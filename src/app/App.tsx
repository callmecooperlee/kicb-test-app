import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { APP_PAGES } from "@shared/consts/pages.ts";
import { AdminPage } from "@pages/AdminPage/AdminPage.tsx";
import "@app/styles/index.scss";
import { ExamplePage } from "@pages/ExamplePage/ExamplePage.tsx";
import { CRMLayout } from "@widgets/CRMLayout/CRMLayout.tsx";
import { HomePage } from "@pages/HomePage/HomePage.tsx";
import { CreditOnePage } from "@pages/CreditOnePage/CreditOnePage.tsx";
import { CreditTwoPage } from "@pages/CreditTwoPage/CreditTwoPage.tsx";
import { defaultsRoutes } from "@app/config/pageConfig.tsx";

function App() {
    return (
        <Suspense>
            <Routes>
                <Route path={APP_PAGES.HOME} element={<CRMLayout />}>
                    {defaultsRoutes.map((item) => (
                        <Route
                            key={item.id}
                            path={item.path}
                            element={item.element}
                        />
                    ))}
                </Route>
            </Routes>
        </Suspense>
    );
}

export default App;
