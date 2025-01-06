import { RouteObject } from "react-router";

import { authPaths } from "./paths";
import { LoginView, RegisterView } from "../../features/auth/views";

export const authRoutes: RouteObject[] = [
  {
    path: authPaths.login,
    element: <LoginView />,
  },
  {
    path: authPaths.register,
    element: <RegisterView />,
  },
];

export * from "./paths";
