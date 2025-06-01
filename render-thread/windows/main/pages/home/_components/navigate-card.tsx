import { RightOutlined } from "@ant-design/icons";
import { Div, P } from "@render/components/common/basic-tag";
import { Button, Flex } from "antd";
import type { FC, ReactNode } from "react";

interface NavigateCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

const NavigateCard: FC<NavigateCardProps> = ({ title, description, icon }) => {
  return (
    <Div className="w-full h-[230px] flex flex-col justify-between shadow-lg rounded-2xl p-8 transition-all duration-300 cursor-pointer bg-white hover:shadow-2xl hover:bg-gray-50">
      {icon}
      <Flex vertical gap={8}>
        <P className="text-lg font-bold">{title}</P>
        <P>{description}</P>
      </Flex>
      <Button className="w-[108px]" icon={<RightOutlined />}>
        立即使用
      </Button>
    </Div>
  );
};

export default NavigateCard;
