import { LeftOutlined } from "@ant-design/icons";
import { Typography } from "antd";
import type { FC } from "react";
import { Link, To } from "react-router";

interface GoBackProps {
  to: To;
  title: string;
}

const GoBack: FC<GoBackProps> = ({ to, title }) => (
  <Link to={to} className="w-fit">
    <Typography.Title
      className="mb-0! transition-all duration-300 ease-in-out hover:text-blue-400!"
      level={4}
    >
      <LeftOutlined /> {title}
    </Typography.Title>
  </Link>
);

export default GoBack;
