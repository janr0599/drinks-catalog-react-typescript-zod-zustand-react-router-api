import { useEffect, useState, ChangeEvent, FormEvent } from "react";
import { useAppStore } from "../stores/useAppStore";
import { SearchFilters } from "../types";

function SearchRecipeForm() {
    const { categories, fetchCategories, SearchRecipes } = useAppStore();

    const [searchFilters, setSearchFilters] = useState<SearchFilters>({
        ingredient: "",
        category: "",
    });

    const handleChange = (
        e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
    ) => {
        setSearchFilters({
            ...searchFilters,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // TODO: Validate
        if (Object.values(searchFilters).includes("")) {
            console.log("All fields are required");
            return;
        }

        // Fetch Recipes
        SearchRecipes(searchFilters);
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    return (
        <form
            className="md:w-1/2 2xl:w-1/3 my-32 p-10 rounded-lg bg-orange-400 shadow space-y-6"
            onSubmit={handleSubmit}
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
                    onChange={handleChange}
                    value={searchFilters.ingredient}
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
                    onChange={handleChange}
                    value={searchFilters.category}
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
