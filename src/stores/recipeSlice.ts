import { StateCreator } from "zustand";
import {
    Categories,
    FullRecipe,
    Recipes,
    SearchFilters,
    Recipe,
} from "../types";
import {
    getCategories,
    getRecipes,
    getFullRecipe,
} from "../services/RecipeService";

export type RecipeSliceType = {
    categories: Categories;
    fetchCategories: () => Promise<void>;
    recipes: Recipes;
    SearchRecipes: (searchFilters: SearchFilters) => Promise<void>;
    hasRecipeInfo: boolean;
    selectRecipe: (id: Recipe["idDrink"]) => Promise<void>;
    fullRecipe: FullRecipe;
    modal: boolean;
    closeModal: () => void;
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

    fullRecipe: {} as FullRecipe,
    modal: false,

    selectRecipe: async (id) => {
        const fullRecipe = await getFullRecipe(id);
        set(() => ({
            fullRecipe,
            modal: true,
        }));
    },

    closeModal: () => {
        set(() => ({
            modal: false,
            fullRecipe: {} as FullRecipe,
        }));
    },
});
