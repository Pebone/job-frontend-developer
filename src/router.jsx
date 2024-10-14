import { createBrowserRouter } from "react-router-dom";
import Home from "../src/pages/Home/Home";
import SearchResults from "./pages/SearchResults/SearchResults";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/search/:query",
    element: <SearchResults />,
  },
]);
