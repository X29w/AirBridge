import { SettingOutlined } from "@ant-design/icons";
import { Div } from "@render/components/common/basic-tag";
import type { FC } from "react";

interface SettingsProps {}

const Settings: FC<SettingsProps> = () => {
  return (
    <Div
      className="text-[20px]"
      onClick={() => window.electronAPI["create-window"]("settings")}
    >
      <SettingOutlined />
    </Div>
  );
};

export default Settings;
