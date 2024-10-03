import { useEffect } from "react";
import { useAppStore } from "../stores/useAppStore";

function SearchRecipeForm() {
    const { categories, fetchCategories } = useAppStore();

    useEffect(() => {
        fetchCategories();
    }, []);

    return (
        <form
            action=""
            className="md:w-1/2 2xl:w-1/3 my-32 p-10 rounded-lg bg-orange-400 shadow space-y-6"
        >
            <div className="space-y-4">
                <label
                    htmlFor="ingredient"
                    className="block text-white uppercase font-extrabold text-lg"
                >
                    Drink or ingredients
                </label>
                <input
                    type="text"
                    id="ingredient"
                    name="ingredient"
                    className="p-3 w-full rounded-lg focus:outline-none"
                    placeholder="Vodka, Tequila, Coffee.."
                />
            </div>

            <div className="space-y-4">
                <label
                    htmlFor="category"
                    className="block text-white uppercase font-extrabold text-lg"
                >
                    Category
                </label>
                <select
                    id="category"
                    name="category"
                    className="p-3 w-full rounded-lg focus:outline-none"
                >
                    <option value="">-- Choose --</option>
                    {categories.drinks.map((drink) => (
                        <option
                            key={drink.strCategory}
                            value={drink.strCategory}
                        >
                            {drink.strCategory}
                        </option>
                    ))}
                </select>
            </div>

            <input
                type="submit"
                value="search recipes"
                className="cursor-pointer bg-orange-800 hover:bg-orange-900 text-white font-extrabold rounded-lg w-full uppercase p-2"
            />
        </form>
    );
}

export default SearchRecipeForm;
