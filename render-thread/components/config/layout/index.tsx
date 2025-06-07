import {
  CloseOutlined,
  FullscreenOutlined,
  MinusOutlined,
} from "@ant-design/icons";
import { Div } from "@render/components/common/basic-tag";
import { Button, Flex } from "antd";
import type { FC } from "react";
import { Outlet } from "react-router";

interface LayoutProps {
  windowName: Electron.WindowName;
}

const Layout: FC<LayoutProps> = ({ windowName }) => (
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
          onClick={() => window.electronAPI["minimize-window"](windowName)}
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
          onClick={() => window.electronAPI["maximize-window"](windowName)}
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
          onClick={() => window.electronAPI["close-window"](windowName)}
        />
      </Flex>
    </Flex>
    <Div className="flex-1 ">
      <Outlet />
    </Div>
  </Div>
);

export default Layout;
