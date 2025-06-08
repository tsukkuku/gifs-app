import Layout from "@/layouts/Layout";
import RandomPage from "@/pages/random/RandomPage";
import SearchPage from "@/pages/search/SearchPage";
import TrendsPage from "@/pages/trends/TrendsPage";
import { createBrowserRouter, type RouteObject } from "react-router-dom";

export const routes: RouteObject[] = [
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: TrendsPage },
      { path: "random", Component: RandomPage },
      { path: "search", Component: SearchPage },
    ],
  },
];

export const router = createBrowserRouter(routes);
