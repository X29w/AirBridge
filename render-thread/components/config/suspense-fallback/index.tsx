import type { FC } from "react";
import { Spin } from "antd";
import { Div } from "@render/components/common/basic-tag";

interface SuspenseFallbackProps {}

const SuspenseFallback: FC<SuspenseFallbackProps> = () => (
  <Div className="w-full h-full grid place-items-center">
    <Spin />
  </Div>
);

export default SuspenseFallback;
