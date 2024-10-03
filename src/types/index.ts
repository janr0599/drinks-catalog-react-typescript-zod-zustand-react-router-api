import { z } from "zod";
import { RecipeCategoriesResponseSchema } from "../utils/recipes-schema";

export type Categories = z.infer<typeof RecipeCategoriesResponseSchema>;
