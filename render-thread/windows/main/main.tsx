import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { routes } from "./router";
import { Suspense } from "react";
import "@render/assets/styles/main.css";
import SuspenseFallback from "@render/components/config/suspense-fallback";
import MainProvider from "@render/components/config/init-provider/main-provider";
import { I18nextProvider } from "react-i18next";
import i18n from "@render/utils/config/i18n";

createRoot(document.getElementById("root")!).render(
  <Suspense fallback={<SuspenseFallback />}>
    <I18nextProvider i18n={i18n}>
      <MainProvider>
        <RouterProvider router={routes} />
      </MainProvider>
    </I18nextProvider>
  </Suspense>
);
