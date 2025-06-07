import { Flex, Select, SelectProps, Typography } from "antd";
import { useState, type FC } from "react";

interface GeneralSettingsProps {}

const GeneralSettings: FC<GeneralSettingsProps> = () => {
  const [language, setLanguage] = useState<Electron.CustomLanguage>("en");

  const onChange: SelectProps["onChange"] = (e) => {
    setLanguage(e);
    window.electronAPI["change-language"](e);
  };

  return (
    <>
      <Flex justify="space-between" align="center">
        <Typography.Title level={3}>语言</Typography.Title>
        <Select
          className="w-[260px]"
          placeholder="选择语言"
          options={[
            { label: "繁體中文", value: "zh-TW" },
            { label: "English", value: "en" },
            { label: "日本語", value: "ja" },
          ]}
          value={language}
          onChange={onChange}
        />
      </Flex>
    </>
  );
};

export default GeneralSettings;
