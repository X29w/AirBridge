import { Div, P } from "@render/components/common/basic-tag";
import { Button, Flex, Menu, MenuProps, Typography } from "antd";
import type { FC } from "react";
import {
  AppstoreOutlined,
  CloudUploadOutlined,
  MailOutlined,
  SettingOutlined,
  WifiOutlined,
} from "@ant-design/icons";
import { Outlet, useNavigate } from "react-router";

interface HomeProps {}
type MenuItem = Required<MenuProps>["items"][number];

const Home: FC<HomeProps> = () => {
  const navigate = useNavigate();
  const items: MenuItem[] = [
    {
      key: "grp",
      label: "Group",
      type: "group",
      children: [
        { key: "file-transfer", label: "文件分享" },
        { key: "screen-record", label: "录屏" },
        { key: "screenshot", label: "截图" },
        { key: "ninja-chat", label: "Ninja Chat" },
      ],
    },
  ];

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    navigate(`/home/${e.key}`);
  };

  return (
    <Div className="h-full p-8 flex flex-col bg-[#f9fafb]">
      <Div className="mb-8 p-4 bg-white rounded-2xl">
        <Flex justify="space-between" align="center">
          <Flex align="center" gap={16}>
            <Div className="w-12 h-12 text-white grid place-items-center rounded-2xl bg-[#3B82F6]">
              <CloudUploadOutlined className="text-2xl" />
            </Div>
            <Div>
              <P className="text-[24px] text-[#1F2937] font-bold">Air Bridge</P>
              <P className="text-[14px] text-[#6B7280]">
                便捷高效的跨设备协作工具
              </P>
            </Div>
          </Flex>
          <Flex align="center" gap={16}>
            <WifiOutlined />
            <P className="text-[14px] text-[#6B7280]">ip: 192.168.0.105</P>
            <Button icon={<SettingOutlined />}>设置</Button>
          </Flex>
        </Flex>
      </Div>

      <Div className="flex-1">
        <Div className="w-full h-full flex gap-5  ">
          <Div className="h-full rounded-2xl">
            <Menu
              className="h-full rounded-2xl"
              onClick={onClick}
              style={{ width: 256 }}
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              mode="inline"
              items={items}
            />
          </Div>
          <Div className="flex-1 bg-white rounded-2xl">
            <Outlet />
          </Div>
        </Div>
      </Div>
    </Div>
  );
};

export default Home;
