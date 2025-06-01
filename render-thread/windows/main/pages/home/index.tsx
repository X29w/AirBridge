import {
  CloudUploadOutlined,
  DesktopOutlined,
  FileProtectOutlined,
  SettingOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Div, P } from "@render/components/common/basic-tag";
import { Button, Flex } from "antd";
import type { FC } from "react";
import NavigateCard from "./_components/navigate-card";
import RenderList from "@render/components/common/render-list";
import InfoCard from "./_components/info-card";

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  const heroes = [
    {
      title: "文件快传",
      description: "快速传输文件到局域网内的任意设备",
      icon: (
        <CloudUploadOutlined
          style={{ color: "#1890ff" }}
          className="text-[32px]"
        />
      ),
    },
    {
      title: "远程协作",
      description: "远程协作，随时随地，随心所欲",
      icon: (
        <TeamOutlined style={{ color: "#A855F7" }} className="text-[32px]" />
      ),
    },
    {
      title: "文档同步",
      description: "跨设备文档自动同步与备份",
      icon: (
        <FileProtectOutlined
          style={{ color: "#22C55E" }}
          className="text-[32px]"
        />
      ),
    },
    {
      title: "屏幕共享",
      description: "一键投屏与多屏协同",
      icon: (
        <DesktopOutlined style={{ color: "#F97316" }} className="text-[32px]" />
      ),
    },
  ];
  return (
    <Div className="w-full h-full p-8 bg-[#f9fafb]">
      <Flex justify="space-between" className="items-center">
        <Flex gap={16}>
          <Div className="w-12 h-12 grid place-items-center text-white bg-blue-500 rounded-2xl">
            <CloudUploadOutlined className=" text-2xl" />
          </Div>
          <Flex vertical>
            <P className="font-bold text-[24px] text-[#1F2937]">快传助手</P>
            <P className="text-[#6B7280] text-[14px]">
              便捷高效的跨设备协作工具
            </P>
          </Flex>
        </Flex>
        <Button icon={<SettingOutlined />}>设置</Button>
      </Flex>

      <Div className="w-full grid grid-cols-2 gap-6 mt-12">
        <RenderList
          items={heroes}
          renderItems={(item) => (
            <NavigateCard
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          )}
        />
      </Div>
      <Div className="mt-8 p-8 bg-white rounded-2xl">
        <P className="mb-6">我的</P>
        <InfoCard />
      </Div>
    </Div>
  );
};

export default Home;
