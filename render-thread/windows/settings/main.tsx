import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { routes } from "./router";
import { Suspense } from "react";
import SuspenseFallback from "@render/components/config/suspense-fallback";
import "@render/assets/styles/main.css";
import "@render/utils/config/i18n";
import SettingsProvider from "@render/components/config/init-provider/settings-provider";

createRoot(document.getElementById("root")!).render(
  <Suspense fallback={<SuspenseFallback />}>
    <SettingsProvider>
      <RouterProvider router={routes} />
    </SettingsProvider>
  </Suspense>
);
