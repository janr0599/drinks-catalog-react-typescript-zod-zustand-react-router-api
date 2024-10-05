import { StateCreator } from "zustand";
import { FullRecipe } from "../types";

export type FavoritesSliceType = {
    favorites: FullRecipe[];
    handleClickFavorite: (recipe: FullRecipe) => void;
    favoriteExists: (id: FullRecipe["idDrink"]) => boolean;
};

export const createFavoritesSlice: StateCreator<FavoritesSliceType> = (
    set,
    get
) => ({
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
    },
    favoriteExists: (id) => {
        return get().favorites.some((favorite) => favorite.idDrink === id);
    },
});
