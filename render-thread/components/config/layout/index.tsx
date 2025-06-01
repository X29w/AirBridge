import {
  CloseOutlined,
  FullscreenOutlined,
  MinusOutlined,
} from "@ant-design/icons";
import { Div } from "@render/components/common/basic-tag";
import { Button, Flex } from "antd";
import type { FC } from "react";
import { Outlet } from "react-router";

interface LayoutProps {}

const Layout: FC<LayoutProps> = () => (
  <Div className="flex flex-col w-full h-full">
    <Flex
      justify="space-between"
      align="content-center"
      className="w-full bg-white h-8 px-2.5 allow-drag"
    >
      <Div />
      <Flex gap={8}>
        <Button className="not-allow-drag" icon={<MinusOutlined />} />
        <Button className="not-allow-drag" icon={<FullscreenOutlined />} />
        <Button className="not-allow-drag" icon={<CloseOutlined />} />
      </Flex>
    </Flex>
    <Div className="flex-1 ">
      <Outlet />
    </Div>
  </Div>
);

export default Layout;
