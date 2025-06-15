import { Flex, Typography, Select, SelectProps } from "antd";
import { useState, type FC } from "react";
import { useTranslation } from "react-i18next";

interface LanguageProps {}

const Language: FC<LanguageProps> = () => {
  const [value, setValue] = useState<Electron.CustomLanguage>("en");
  const { t } = useTranslation();

  const onChange: SelectProps["onChange"] = (e) => {
    setValue(e);
    window.electronAPI["change-language"](e);
  };
  return (
    <Flex justify="space-between" align="center">
      <Typography.Title level={5}>
        {t("settings.general.language")}
      </Typography.Title>
      <Select
        className="w-[260px] h-10!"
        placeholder={t("settings.general.chooseLanguage")}
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
