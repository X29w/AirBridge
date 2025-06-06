import {
  DeleteOutlined,
  LeftOutlined,
  PauseOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { Button, Flex, Space, Typography } from "antd";
import type { FC } from "react";
import { ProColumns, ProTable } from "@ant-design/pro-components";
import { Div } from "@render/components/common/basic-tag";
import { Link } from "react-router";

interface RecordProps {}

const Record: FC<RecordProps> = () => {
  const columns: ProColumns<any>[] = [
    {
      title: "文件信息",
      dataIndex: "name",
    },
    {
      title: "传输详情",
      dataIndex: "transfer_detail",
      hideInSearch: true,
    },
    {
      title: "状态",
      dataIndex: "status",
      valueEnum: {
        success: { text: "成功", status: "success" },
        processing: { text: "传输中", status: "processing" },
        error: { text: "失败", status: "error" },
      },
    },
    {
      title: "时间",
      dataIndex: "time",
      valueType: "dateRange",
    },
    {
      title: "操作",
      valueType: "option",
      render: () => [
        <Button
          type="link"
          key="pause"
          icon={
            <Div className="text-[18px]">
              <PauseOutlined />
            </Div>
          }
        />,

        <Button
          danger
          type="link"
          key="delete"
          icon={
            <Div className="text-[18px]">
              <DeleteOutlined />
            </Div>
          }
        />,
      ],
    },
  ];
  return (
    <Div className="w-full h-full flex flex-col p-8 bg-[#f9fafb]">
      <Link to="/file-transfer/main" className="w-fit">
        <Typography.Title
          className="mb-0! transition-all duration-300 ease-in-out hover:text-blue-400!"
          level={4}
        >
          <LeftOutlined /> 传输记录
        </Typography.Title>
      </Link>
      <ProTable
        className="mt-8"
        columns={columns}
        cardBordered
        request={async () => {
          return {
            data: [1],
          };
        }}
        rowKey="id"
        toolBarRender={() => [
          <Button key="button" icon={<PlusOutlined />} type="primary">
            新建
          </Button>,
        ]}
      />
    </Div>
  );
};

export default Record;
