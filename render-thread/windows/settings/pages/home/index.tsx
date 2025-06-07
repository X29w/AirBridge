import { FolderOpenOutlined, GlobalOutlined } from "@ant-design/icons";
import { Div } from "@render/components/common/basic-tag";
import { Menu } from "antd";
import { type FC } from "react";
import { Outlet, useNavigate } from "react-router";

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  const navigate = useNavigate();

  const items = [
    {
      key: "general-settings",
      label: "常规设置",
      icon: <GlobalOutlined />,
    },
    {
      key: "storage-settings",
      label: "存储设置",
      icon: <FolderOpenOutlined />,
    },
  ];

  return (
    <Div className="w-full h-full p-8 grid grid-cols-10 gap-8 bg-[#f9fafb]">
      <Div className="w-full h-full p-2 col-span-3 rounded-2xl bg-white">
        <Menu
          onClick={(e) => navigate(e.key)}
          className="h-full"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          items={items}
        />
      </Div>
      <Div className="w-full h-full p-6 col-span-7 bg-white rounded-2xl">
        <Outlet />
      </Div>
    </Div>
  );
};

export default Home;
