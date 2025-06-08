import { Flex, Select, SelectProps, Typography } from "antd";
import { useState, type FC } from "react";
import Language from "./_components/language";
import NickName from "./_components/nick-name";

interface GeneralSettingsProps {}

const GeneralSettings: FC<GeneralSettingsProps> = () => {
  const [language, setLanguage] = useState<Electron.CustomLanguage>("en");

  const onChange: SelectProps["onChange"] = (e) => {
    setLanguage(e);
    window.electronAPI["change-language"](e);
  };

  return (
    <Flex vertical gap={16}>
      <Language />

      <NickName />
    </Flex>
  );
};

export default GeneralSettings;
