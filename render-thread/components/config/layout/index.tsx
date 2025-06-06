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
        <Button
          ghost
          type="text"
          className="not-allow-drag"
          icon={
            <Div className="text-[20px]">
              <MinusOutlined />
            </Div>
          }
        />
        <Button
          ghost
          type="text"
          className="not-allow-drag"
          icon={
            <Div className="text-[20px]">
              <FullscreenOutlined />
            </Div>
          }
        />
        <Button
          ghost
          type="text"
          className="not-allow-drag"
          icon={
            <Div className="text-[20px] transition-all duration-300 ease-in-out hover:text-red-500">
              <CloseOutlined />
            </Div>
          }
        />
      </Flex>
    </Flex>
    <Div className="flex-1 ">
      <Outlet />
    </Div>
  </Div>
);

export default Layout;
