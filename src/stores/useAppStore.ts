import { create } from "zustand";
import { createRecipesSlice, RecipesSliceType } from "./recipesSlice";
import { createFavoritesSlice, FavoritesSliceType } from "./favoritesSlice";
import { devtools } from "zustand/middleware";

export const useAppStore = create<RecipesSliceType & FavoritesSliceType>()(
    devtools((...a) => ({
        ...createRecipesSlice(...a),
        ...createFavoritesSlice(...a),
    }))
);

// Slice Pattern
