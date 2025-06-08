import { useLanguageChange } from "@render/hooks/config/use-language-change";
import { type FC, type PropsWithChildren } from "react";

interface SettingsProviderProps extends PropsWithChildren {}

const SettingsProvider: FC<SettingsProviderProps> = ({ children }) => {
  useLanguageChange();
  return <>{children}</>;
};

export default SettingsProvider;
