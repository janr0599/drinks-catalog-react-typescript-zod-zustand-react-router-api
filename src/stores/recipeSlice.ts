import { StateCreator } from "zustand";
import { Categories } from "../types";
import { getCategories } from "../services/RecipeService";

export type RecipeSliceType = {
    categories: Categories;
    fetchCategories: () => Promise<void>;
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
});
