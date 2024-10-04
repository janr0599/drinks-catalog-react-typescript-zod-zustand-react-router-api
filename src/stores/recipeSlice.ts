import { StateCreator } from "zustand";
import { Categories, Recipes, SearchFilters } from "../types";
import { getCategories, getRecipes } from "../services/RecipeService";

export type RecipeSliceType = {
    categories: Categories;
    fetchCategories: () => Promise<void>;
    recipes: Recipes;
    SearchRecipes: (searchFilters: SearchFilters) => Promise<void>;
    hasRecipeInfo: boolean;
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
    hasRecipeInfo: false,
    SearchRecipes: async (searchFilters) => {
        set(() => ({
            hasRecipeInfo: false,
        }));

        const recipes = await getRecipes(searchFilters);

        set(() => ({
            recipes,
            hasRecipeInfo: true,
        }));
    },
});
