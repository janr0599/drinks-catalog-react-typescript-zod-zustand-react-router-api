import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexPage from "./views/IndexPage";
import FavoritesPage from "./views/FavoritesPage";
import Layout from "./layouts/Layout";

function Approuter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<IndexPage />} index />
                    <Route path="/favorites" element={<FavoritesPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Approuter;
