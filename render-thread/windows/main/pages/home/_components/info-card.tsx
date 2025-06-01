import {
  CloudUploadOutlined,
  GoldOutlined,
  WifiOutlined,
} from "@ant-design/icons";
import { Div, P } from "@render/components/common/basic-tag";
import RenderList from "@render/components/common/render-list";
import type { FC } from "react";

interface InfoCardProps {}

const InfoCard: FC<InfoCardProps> = () => {
  const heroes = [
    {
      title: "最近连接设备",
      description: "未连接任何设备",
      icon: (
        <Div className="w-12 h-12 grid place-items-center rounded-xl bg-[#DBEAFE]">
          <CloudUploadOutlined
            style={{ color: "#3B82F6" }}
            className="text-2xl"
          />
        </Div>
      ),
      bgColor: "bg-gray-50",
    },
    {
      title: "当前网络状态",
      description: "IP 地址：192.168.0.105",
      icon: (
        <Div className="w-12 h-12 grid place-items-center rounded-xl bg-[#F3E8FF]">
          <WifiOutlined style={{ color: "#A855F7" }} className="text-2xl" />
        </Div>
      ),
      bgColor: "bg-gray-50",
    },
    {
      title: "我的传输记录",
      description: "暂无数据",
      icon: (
        <Div className="w-12 h-12 grid place-items-center rounded-xl bg-[#DCFCE7]">
          <GoldOutlined style={{ color: "#22C55E" }} className="text-2xl" />
        </Div>
      ),
      bgColor: "bg-gray-50",
    },
  ];
  return (
    <Div className="w-full grid grid-cols-3 gap-6">
      <RenderList
        items={heroes}
        renderItems={(item) => (
          <Div className="w-full h-[160px] flex flex-col justify-between p-6 bg-[#f9fafb] rounded-2xl  cursor-pointer transition-all duration-300 hover:shadow-2xl hover:bg-gray-50">
            {item.icon}
            <P className="mb-2">{item.title}</P>
            <P>{item.description}</P>
          </Div>
        )}
      />
    </Div>
  );
};

export default InfoCard;
