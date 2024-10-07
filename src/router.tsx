import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexPage from "./views/IndexPage";
import Layout from "./layouts/Layout";

const FavoritesPage = lazy(() => import("./views/FavoritesPage"));
function Approuter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<IndexPage />} index />
                    <Route
                        path="/favorites"
                        element={
                            <Suspense fallback="cargando...">
                                <FavoritesPage />
                            </Suspense>
                        }
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Approuter;
