import { useLanguageChange } from "@render/hooks/config/use-language-change";
import type { FC, PropsWithChildren } from "react";

interface MainProviderProps extends PropsWithChildren {}

const MainProvider: FC<MainProviderProps> = ({ children }) => {
  useLanguageChange();
  return <>{children}</>;
};

export default MainProvider;
