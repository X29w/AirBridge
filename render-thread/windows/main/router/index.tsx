import Layout from "@render/components/config/layout";
import { lazy } from "react";
import { createHashRouter } from "react-router";

const Home = lazy(() => import("../pages/home"));

export const routes = createHashRouter([
  {
    path: "/",
    children: [
      {
        path: "",
        element: <Layout />,
        children: [
          {
            path: "home",
            element: <Home />,
          },
        ],
      },
    ],
  },
]);
