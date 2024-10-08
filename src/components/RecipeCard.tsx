import { useAppStore } from "../stores/useAppStore";
import { Recipe } from "../types";

type RecipeCardProps = {
    recipe: Recipe;
};

function RecipeCard({ recipe }: RecipeCardProps) {
    const { selectRecipe } = useAppStore();

    return (
        <div className="card bg-base-100 w-96 shadow-xl mx-auto">
            <figure>
                <img
                    src={recipe.strDrinkThumb}
                    alt={`${recipe.strDrink} picture`}
                    className="hover:scale-105 hover:rotate-2 transition-transform"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title truncate">{recipe.strDrink}</h2>
                <div className="card-actions justify-end">
                    <button
                        className="btn bg-orange-800 hover:bg-orange-900  text-white"
                        onClick={() => selectRecipe(recipe.idDrink)}
                    >
                        Full Recipe
                    </button>
                </div>
            </div>
        </div>
    );
}

export default RecipeCard;
