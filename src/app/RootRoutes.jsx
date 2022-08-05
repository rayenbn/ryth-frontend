import React from "react";
import { Redirect } from "react-router-dom";
import sessionsRoutes from "./views/sessions/sessionsRoutes";
import AuthGuard from "./auth/AuthGuard";
import pagesRoutes from "./views/pages/pagesRoutes";
import iconsRoutes from "./views/icons/iconsRoutes";
import roles from "../app/auth/authRoles";
// import Auth from "app/auth/Auth";

const redirectRoute = [
  {
    path: "/",
    exact: true,
    component: () => <Redirect to="home" />
  }
];

const errorRoute = [
  {
    component: () => <Redirect to="/session/404" />
  }
];

const routes = [
  ...sessionsRoutes,
  {
    path: "/",
    component: AuthGuard,
    auth: roles.normalClient,
    routes: [
      ...pagesRoutes,
      ...iconsRoutes,
      ...redirectRoute,
      ...errorRoute
    ]
    
  }
];

export default routes;
