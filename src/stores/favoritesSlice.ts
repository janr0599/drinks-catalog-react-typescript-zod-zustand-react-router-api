import { StateCreator } from "zustand";
import { FullRecipe } from "../types";
import { createRecipesSlice, RecipesSliceType } from "./recipesSlice";
import {
    createNotificationsSlice,
    NotificationsSliceType,
} from "./notificationsSlice";

export type FavoritesSliceType = {
    favorites: FullRecipe[];
    handleClickFavorite: (recipe: FullRecipe) => void;
    favoriteExists: (id: FullRecipe["idDrink"]) => boolean;
    loadFromStorage: () => void;
};

export const createFavoritesSlice: StateCreator<
    FavoritesSliceType & RecipesSliceType & NotificationsSliceType,
    [],
    [],
    FavoritesSliceType
> = (set, get, api) => ({
    favorites: [],

    handleClickFavorite: (recipe) => {
        if (get().favoriteExists(recipe.idDrink)) {
            set((state) => ({
                favorites: state.favorites.filter(
                    (favorite) => favorite.idDrink !== recipe.idDrink
                ),
            }));
            createNotificationsSlice(set, get, api).showNotification({
                text: "Removed from favorites",
                error: false,
            });
        } else {
            set((state) => ({
                favorites: [...state.favorites, recipe],
            }));
            createNotificationsSlice(set, get, api).showNotification({
                text: "Added to favorites",
                error: false,
            });
        }

        createRecipesSlice(set, get, api).closeModal();
        localStorage.setItem("favorites", JSON.stringify(get().favorites));
    },

    favoriteExists: (id) => {
        return get().favorites.some((favorite) => favorite.idDrink === id);
    },

    loadFromStorage: () => {
        const storedFavorites = localStorage.getItem("favorites");
        if (storedFavorites) {
            set({
                favorites: JSON.parse(storedFavorites),
            });
        }
    },
});
