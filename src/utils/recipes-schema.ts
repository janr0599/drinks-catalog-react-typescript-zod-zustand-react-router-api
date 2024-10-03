import { z } from "zod";

export const RecipeCategoriesResponseSchema = z.object({
    drinks: z.array(
        z.object({
            strCategory: z.string(),
        })
    ),
});

export const SearchFiltersSchema = z.object({
    ingredient: z.string(),
    category: z.string(),
});

export const RecipesResponseSchema = z.object({
    drinks: z.array(
        z.object({
            idDrink: z.string(),
            strDrink: z.string(),
            strDrinkThumb: z.string(),
        })
    ),
});
