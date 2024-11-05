import { createBrowserRouter } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import MoviesList from "./pages/MoviesList";
import TVShowsList from "./pages/TVShowsList";

// import People from "./pages/People";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/", 
        element: <Home />,
      },
      {
        path: "/movie/popular", 
        element: <MoviesList type="Popular"/>,
      },
      {
        path: "/movie/now_playing", 
        element: <MoviesList type="Now Playing" />,
      },
      {
        path: "/movie/upcoming", 
        element: <MoviesList type="Upcoming"/>,
      },
      {
        path: "/movie/top_rated", 
        element: <MoviesList type="Top Rated" />,
      },
      {
        path: "/tv/popular", 
        element: <TVShowsList type="Popular" />,
      },
      {
        path: "/tv/airing_today", 
        element: <TVShowsList type="Airing Today" />,
      },
      {
        path: "/tv/on_the_air", 
        element: <TVShowsList type="On TV" />,
      },
      {
        path: "/tv/top_rated", 
        element: <TVShowsList type="Top Rated" />,
      },
    ],
  },
]);

export default router;