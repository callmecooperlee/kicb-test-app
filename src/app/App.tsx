import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { APP_PAGES } from "@shared/consts/pages.ts";
import "@app/styles/index.scss";
import { CRMLayout } from "@widgets/CRMLayout/CRMLayout.tsx";
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
