import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { routes } from "./router";
import { Suspense } from "react";
import "@render/assets/main.css";
import SuspenseFallback from "@render/components/config/suspense-fallback";

createRoot(document.getElementById("root")!).render(
  <Suspense fallback={<SuspenseFallback />}>
    <RouterProvider router={routes} />
  </Suspense>
);
