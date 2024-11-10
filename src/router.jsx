import { createBrowserRouter } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import MoviesList from "./pages/MoviesList";
import SearchResult from "./pages/SearchResult";
import Detail from "./pages/Detail";
import About from "./pages/About";
import RandomMovieDetail from "./pages/RandomMovieDetail";
import Favorite from "./pages/Favorite";


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
        path: "/movie/:id", 
        element: <Detail />,
      },
      {
        path: "/search/movie", 
        element: <SearchResult />,
      },
      {
        path: "/about", 
        element: <About />,
      },
      {
        path: "/surprise me", 
        element: <RandomMovieDetail />,
      },
      {
        path: "/favorite",
        element: <Favorite />,
      },
    ],
  },
]);

export default router;