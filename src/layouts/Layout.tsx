import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import FullRecipeModal from "../components/FullRecipeModal";

function Layout() {
    return (
        <>
            <Header />
            <main className="container mx-auto py-16">
                <Outlet />
            </main>

            <FullRecipeModal />
        </>
    );
}

export default Layout;
