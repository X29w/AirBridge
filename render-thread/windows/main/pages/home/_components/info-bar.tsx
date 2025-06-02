import { WifiOutlined } from "@ant-design/icons";
import { Div } from "@render/components/common/basic-tag";
import { Progress, Typography } from "antd";
import type { FC } from "react";

interface InfoBarProps {}

const InfoBar: FC<InfoBarProps> = () => {
  return (
    <Div className="w-full h-12 mt-10 flex gap-8 justify-between items-center">
      <Div className="w-12 h-full grid place-items-center rounded-2xl bg-white shadow-lg">
        <WifiOutlined />
      </Div>
      <Div className="flex-1 h-22 px-4 flex flex-col justify-center items-center gap-2 rounded-2xl bg-white shadow-lg">
        <Typography.Text>正在传输 ： 100MB/s</Typography.Text>
        <Progress percent={30} />
      </Div>
      <Div className="w-[150px] h-full grid place-items-center rounded-2xl bg-white shadow-lg">
        <Typography.Text>ip: 192.168.1.100</Typography.Text>
      </Div>
    </Div>
  );
};

export default InfoBar;
