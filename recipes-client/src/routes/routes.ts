import { authPaths } from "./authRoutes/paths";
import { recipesPaths } from "./recipesRoutes";

export const routes = {
  auth: authPaths,
  recipes: recipesPaths,
} as const;
