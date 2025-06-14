import Layout from "@/layouts/Layout";
import FavoritePage from "@/pages/favorite/FavoritePage";
import GifIdPage from "@/pages/gif-id-page/GifIdPage";
import RandomPage from "@/pages/random/RandomPage";
import SearchPage from "@/pages/search/SearchPage";
import StickersPage from "@/pages/stickers/StickersPage";
import TrendsPage from "@/pages/trends/TrendsPage";
import { createBrowserRouter, type RouteObject } from "react-router-dom";

export const routes: RouteObject[] = [
  {
    path: "/gifs-app/",
    Component: Layout,
    children: [
      { index: true, Component: SearchPage },
      { path: "trends", Component: TrendsPage },
      { path: "random", Component: RandomPage },
      { path: "stickers", Component: StickersPage },
      { path: ":id", Component: GifIdPage },
    ],
  },
  { path: "/favorites", Component: FavoritePage },
];

export const router = createBrowserRouter(routes);
