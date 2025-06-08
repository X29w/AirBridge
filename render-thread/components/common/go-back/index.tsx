import { LeftOutlined } from "@ant-design/icons";
import { Flex, Typography } from "antd";
import type { FC, ReactNode } from "react";
import { Link, To } from "react-router";

interface GoBackProps {
  to: To;
  title: string;
  rightContent?: ReactNode;
}

const GoBack: FC<GoBackProps> = ({ to, title, rightContent }) => (
  <Flex justify="space-between" align="center">
    <Link to={to} className="w-fit">
      <Typography.Title
        className="mb-0! transition-all duration-300 ease-in-out hover:text-blue-400!"
        level={4}
      >
        <LeftOutlined /> {title}
      </Typography.Title>
    </Link>
    {rightContent}
  </Flex>
);

export default GoBack;
