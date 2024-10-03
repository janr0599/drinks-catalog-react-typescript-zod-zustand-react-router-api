import { useMemo } from "react";
import { NavLink, useLocation } from "react-router-dom";
import SearchRecipeForm from "./SearchRecipeForm";

function Header() {
    const { pathname } = useLocation();

    const isHome = useMemo(() => pathname === "/", [pathname]);

    return (
        <header
            className={isHome ? "bg-header bg-cover bg-center" : "bg-slate-800"}
        >
            <div className="mx-auto container px-5 py-16">
                <div className="flex justify-between items-center">
                    <div className="">
                        <img className="w-32" src="/logo.svg" alt="Page logo" />
                    </div>
                    <nav className="flex gap-4">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-orange-400 uppercase font-bold"
                                    : "text-white uppercase font-bold"
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/favorites"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-orange-400 uppercase font-bold"
                                    : "text-white uppercase font-bold"
                            }
                        >
                            Favorites
                        </NavLink>
                    </nav>
                </div>
                {isHome && <SearchRecipeForm />}
            </div>
        </header>
    );
}

export default Header;
