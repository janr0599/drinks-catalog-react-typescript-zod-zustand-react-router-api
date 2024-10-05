import { useMemo } from "react";
import RecipeCard from "../components/RecipeCard";
import { useAppStore } from "../stores/useAppStore";

function FavoritesPage() {
    const { favorites } = useAppStore();
    const hasFavorites = useMemo(() => favorites.length, []);

    return (
        <>
            <h1 className="text-6xl font-extrabold">Favorites</h1>
            {hasFavorites ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 my-10 gap-10">
                    {favorites.map((recipe) => (
                        <RecipeCard key={recipe.idDrink} recipe={recipe} />
                    ))}
                </div>
            ) : (
                <h1 className="text-4xl text-center font-bold mt-32">
                    No favorites yet
                </h1>
            )}
        </>
    );
}

export default FavoritesPage;
