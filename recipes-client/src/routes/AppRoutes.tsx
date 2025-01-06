import { RouteObject, useRoutes } from "react-router-dom";

import { authRoutes } from "./authRoutes";
import { recipesRoutes } from "./recipesRoutes";

export const AppRoutes = () => {
  const routes: RouteObject[] = [...authRoutes, ...recipesRoutes];

  const element = useRoutes(routes);

  return <>{element}</>;
};
