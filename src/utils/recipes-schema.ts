import { z } from "zod";

export const RecipeCategoriesResponseSchema = z.object({
    drinks: z.array(
        z.object({
            strCategory: z.string(),
        })
    ),
});
