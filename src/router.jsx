import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../src/pages/Home/Home";
import SearchResults from "./pages/SearchResults/SearchResults";
import Article from "./pages/Article/Article";
import PageBlock from "./pages/Page_Block/Page_Block";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/search/:query",
    element: <SearchResults />,
  },
  {
    path: "/news/:slug",
    element: <Article />,
  },
  {
    path: "/category/:category",
    element: <Navigate to="/" replace />,
  },
  {
    path: "/author/:author",
    element: <Navigate to="/" replace />,
  },
  {
    path: "/page-block",
    element: <PageBlock />,
  },
]);
