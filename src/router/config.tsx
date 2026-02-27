import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import TermsPage from "../pages/terms/page";
import LegalPage from "../pages/legal/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/terms",
    element: <TermsPage />,
  },
  {
    path: "/legal",
    element: <LegalPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
