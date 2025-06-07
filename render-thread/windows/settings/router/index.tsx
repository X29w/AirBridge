import Layout from "@render/components/config/layout";
import { lazy } from "react";
import { createHashRouter } from "react-router";

const Home = lazy(() => import("@render/windows/settings/pages/home"));
const StorageSettings = lazy(
  () => import("@render/windows/settings/pages/storage-settings")
);
const GeneralSettings = lazy(
  () => import("@render/windows/settings/pages/general-settings")
);

export const routes = createHashRouter([
  {
    path: "/",
    children: [
      {
        path: "",
        element: <Layout windowName="settings" />,
        children: [
          {
            path: "home",
            element: <Home />,
            children: [
              { path: "general-settings", element: <GeneralSettings /> },
              { path: "storage-settings", element: <StorageSettings /> },
            ],
          },
        ],
      },
    ],
  },
]);
