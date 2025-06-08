import { Flex, Input, Typography } from "antd";
import { useState, type FC } from "react";

interface NickNameProps {}

const NickName: FC<NickNameProps> = () => {
  const [value, setValue] = useState<string>("");
  return (
    <Flex justify="space-between" align="center">
      <Typography.Title level={5}>本机昵称</Typography.Title>
      <Input
        className="w-[260px]! h-10"
        maxLength={20}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </Flex>
  );
};

export default NickName;
