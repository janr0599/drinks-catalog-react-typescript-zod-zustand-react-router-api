import { z } from "zod";
import {
    RecipeCategoriesResponseSchema,
    RecipeResponseSchema,
    RecipesResponseSchema,
} from "../utils/recipes-schema";
import { SearchFiltersSchema } from "../utils/recipes-schema";

export type Categories = z.infer<typeof RecipeCategoriesResponseSchema>;
export type SearchFilters = z.infer<typeof SearchFiltersSchema>;
export type Recipes = z.infer<typeof RecipesResponseSchema>;
export type Recipe = z.infer<typeof RecipeResponseSchema>;
