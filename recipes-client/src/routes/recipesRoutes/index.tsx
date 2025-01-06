import { Navigate, RouteObject } from "react-router";

import { recipesPaths } from "./paths";
import { RecipesView } from "../../features/recipes/views/RecipesView/RecipesView";
import { RecipeView } from "../../features/recipes/views";

export const recipesRoutes: RouteObject[] = [
  {
    path: "",
    element: <Navigate to={recipesPaths.recipes} />,
  },
  {
    path: recipesPaths.recipes,
    element: <RecipesView />,
  },
  {
    path: recipesPaths.recipe,
    element: <RecipeView />,
  },
];

export * from "./paths";
