import Layout from "@render/components/config/layout";
import { lazy } from "react";
import { createHashRouter } from "react-router";

const Home = lazy(() => import("../pages/home"));
const ScreenRecord = lazy(() => import("../pages/screen-record"));
const ScreenShot = lazy(() => import("../pages/screen-shot"));
const NinjaChat = lazy(() => import("../pages/ninja-chat"));
const FileTransferLayout = lazy(() => import("../pages/file-transfer"));
const FileTransfer = lazy(() => import("../pages/file-transfer/main"));
const FileTransferRecord = lazy(() => import("../pages/file-transfer/record"));
const MoreDevice = lazy(() => import("../pages/file-transfer/more-device"));

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
            element: <FileTransferLayout />,
            children: [
              {
                path: "main",
                element: <FileTransfer />,
              },
              {
                path: "record",
                element: <FileTransferRecord />,
              },
              {
                path: "more-device",
                element: <MoreDevice />,
              },
            ],
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
