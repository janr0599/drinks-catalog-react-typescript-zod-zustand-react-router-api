import axios from "axios";
import {
    RecipeCategoriesResponseSchema,
    RecipesResponseSchema,
} from "../utils/recipes-schema";
import { SearchFilters } from "../types";

export const getCategories = async () => {
    const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";

    const { data } = await axios(url);

    const result = RecipeCategoriesResponseSchema.safeParse(data);
    if (result.success) {
        return result.data;
    }
};

export const getRecipes = async (searchFilters: SearchFilters) => {
    const { category, ingredient } = searchFilters;

    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}&i=${ingredient}`;

    const { data } = await axios(url);

    const result = RecipesResponseSchema.safeParse(data);
    if (result.success) {
        return result.data;
    }
};
