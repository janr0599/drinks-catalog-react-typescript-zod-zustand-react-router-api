import { StateCreator } from "zustand";
import { FullRecipe } from "../types";
import { createRecipesSlice, RecipesSliceType } from "./recipesSlice";

export type FavoritesSliceType = {
    favorites: FullRecipe[];
    handleClickFavorite: (recipe: FullRecipe) => void;
    favoriteExists: (id: FullRecipe["idDrink"]) => boolean;
    loadFromStorage: () => void;
};

export const createFavoritesSlice: StateCreator<
    FavoritesSliceType & RecipesSliceType,
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
        } else {
            set((state) => ({
                favorites: [...state.favorites, recipe],
            }));
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
