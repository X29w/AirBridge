import { Div } from "@render/components/common/basic-tag";
import RenderList from "@render/components/common/render-list";
import { Typography } from "antd";
import type { FC } from "react";

interface TargetDeviceProps {}

const TargetDevice: FC<TargetDeviceProps> = () => {
  const list = [
    {
      title: "xx的设备",
      ip: "192.168.1.100",
    },
    {
      title: "yy的设备",
      ip: "192.168.1.101",
    },
    {
      title: "zz的设备",
      ip: "192.168.1.102",
    },
  ];

  return (
    <Div className="w-full mt-4 grid grid-cols-3 gap-4">
      <RenderList
        items={list}
        renderItems={(item) => (
          <Div className="p-4 h-20 flex flex-col justify-center gap-2 rounded-2xl bg-white shadow-lg transition-all duration-300 ease-in-out cursor-pointer hover:shadow-2xl">
            <Typography.Text strong>{item.title}</Typography.Text>
            <Typography.Text type="secondary">{item.ip}</Typography.Text>
          </Div>
        )}
      />
    </Div>
  );
};

export default TargetDevice;
