import RecipeCard from "../components/RecipeCard";
import { useAppStore } from "../stores/useAppStore";

function IndexPage() {
    const { recipes, hasRecipeInfo } = useAppStore();

    return (
        <>
            {!hasRecipeInfo ? (
                <h2 className="text-4xl text-center font-bold mb-5">
                    Recipes will show up here
                </h2>
            ) : (
                <>
                    <h2 className="text-4xl text-center font-bold mb-10">
                        Recipes
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 my-10 gap-10">
                        {recipes.drinks.map((recipe) => (
                            <RecipeCard key={recipe.idDrink} recipe={recipe} />
                        ))}
                    </div>
                </>
            )}
        </>
    );
}

export default IndexPage;
