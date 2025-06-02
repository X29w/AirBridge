import Layout from "@render/components/config/layout";
import { lazy } from "react";
import { createHashRouter } from "react-router";

const Home = lazy(() => import("../pages/home"));
const FileTransfer = lazy(() => import("../pages/file-transfer"));
const ScreenRecord = lazy(() => import("../pages/screen-record"));
const ScreenShot = lazy(() => import("../pages/screen-shot"));
const NinjaChat = lazy(() => import("../pages/ninja-chat"));

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
          {
            path: "file-transfer",
            element: <FileTransfer />,
          },
          {
            path: "screen-record",
            element: <ScreenRecord />,
          },
          {
            path: "screen-shot",
            element: <ScreenShot />,
          },
          {
            path: "ninja-chat",
            element: <NinjaChat />,
          },
        ],
      },
    ],
  },
]);
