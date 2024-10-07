import { create } from "zustand";
import { createRecipesSlice, RecipesSliceType } from "./recipesSlice";
import { createFavoritesSlice, FavoritesSliceType } from "./favoritesSlice";
import {
    createNotificationsSlice,
    NotificationsSliceType,
} from "./notificationsSlice";
import { devtools } from "zustand/middleware";

export const useAppStore = create<
    RecipesSliceType & FavoritesSliceType & NotificationsSliceType
>()(
    devtools((...a) => ({
        ...createRecipesSlice(...a),
        ...createFavoritesSlice(...a),
        ...createNotificationsSlice(...a),
    }))
);

// Slice Pattern
