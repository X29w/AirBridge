import { WifiOutlined } from "@ant-design/icons";
import { Div } from "@render/components/common/basic-tag";
import { Progress, Typography } from "antd";
import type { FC } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import Progressbar from "./progress-bar";
import useLocalIp from "@render/hooks/feature/use-local-ip";
import { useNetwork } from "ahooks";

interface InfoBarProps {}

const InfoBar: FC<InfoBarProps> = () => {
  const { t } = useTranslation();
  const ip = useLocalIp();
  const { online, rtt } = useNetwork();

  const colorMap = new Map<boolean, string>([
    [!online, "text-gray-400"],
    [0 <= rtt! && rtt! < 100, "#a3e635"],
    [100 <= rtt! && rtt! < 200, "#fbbf24"],
    [200 <= rtt! && rtt! < 300, "#c2410c"],
    [300 <= rtt! && rtt! < 400, "#dc2626"],
  ]);

  return (
    <Div className="w-full  mt-10 flex gap-8 justify-between items-center">
      <Div
        style={{ color: colorMap.get(true) }}
        className="w-12 h-12 grid place-items-center text-[20px]  rounded-2xl bg-white shadow-lg"
      >
        <WifiOutlined />
      </Div>

      <Link className="flex-1" to="/transfer-zone">
        <Progressbar
          variant="blue"
          className="w-full h-22 rounded-2xl bg-white shadow-lg"
        >
          <Div className="absolute w-full h-full px-4 flex flex-col justify-center items-center gap-2 cursor-pointer">
            <Typography.Text>
              {t("home.infoBar.title")} ： 100MB/s
            </Typography.Text>
            <Progress percent={30} />
          </Div>
        </Progressbar>
      </Link>
      <Div className="w-[150px] h-12 grid place-items-center rounded-2xl bg-white shadow-lg">
        <Typography.Text>ip: {ip}</Typography.Text>
      </Div>
    </Div>
  );
};

export default InfoBar;
