import { Flex, Typography, Select, SelectProps } from "antd";
import { useState, type FC } from "react";

interface LanguageProps {}

const Language: FC<LanguageProps> = () => {
  const [value, setValue] = useState<Electron.CustomLanguage>("en");

  const onChange: SelectProps["onChange"] = (e) => {
    setValue(e);
    window.electronAPI["change-language"](e);
  };
  return (
    <Flex justify="space-between" align="center">
      <Typography.Title level={5}>语言</Typography.Title>
      <Select
        className="w-[260px] h-10!"
        placeholder="选择语言"
        options={[
          { label: "繁體中文", value: "zh-TW" },
          { label: "English", value: "en" },
          { label: "日本語", value: "ja" },
        ]}
        value={value}
        onChange={onChange}
      />
    </Flex>
  );
};

export default Language;
