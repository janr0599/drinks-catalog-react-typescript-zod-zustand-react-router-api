import { StateCreator } from "zustand";
import { Categories, Recipes, SearchFilters } from "../types";
import { getCategories, getRecipes } from "../services/RecipeService";

export type RecipeSliceType = {
    categories: Categories;
    fetchCategories: () => Promise<void>;
    recipes: Recipes;
    SearchRecipes: (searchFilters: SearchFilters) => Promise<void>;
};

export const createRecipeSlice: StateCreator<RecipeSliceType> = (set) => ({
    categories: {
        drinks: [],
    },
    fetchCategories: async () => {
        const categories = await getCategories();

        set(() => ({
            categories,
        }));
    },
    recipes: {
        drinks: [],
    },
    SearchRecipes: async (searchFilters) => {
        const recipes = await getRecipes(searchFilters);

        set(() => ({
            recipes,
        }));
    },
});
