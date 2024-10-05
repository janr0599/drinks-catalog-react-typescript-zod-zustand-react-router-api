import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import FullRecipeModal from "../components/FullRecipeModal";
import { useEffect } from "react";
import { useAppStore } from "../stores/useAppStore";

function Layout() {
    const { loadFromStorage } = useAppStore();

    useEffect(() => {
        loadFromStorage();
    }, []);

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
