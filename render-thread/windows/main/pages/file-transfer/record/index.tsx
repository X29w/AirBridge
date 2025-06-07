import {
  DeleteOutlined,
  LeftOutlined,
  PauseOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { ProColumns, ProTable } from "@ant-design/pro-components";
import { Div } from "@render/components/common/basic-tag";
import GoBack from "@render/components/common/go-back";
import { Button, Typography } from "antd";
import type { FC } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";

interface RecordProps {}

const Record: FC<RecordProps> = () => {
  const { t } = useTranslation();
  const columns: ProColumns<any>[] = [
    {
      title: t("fileTransfer.record.columns.name"),
      dataIndex: "name",
    },
    {
      title: t("fileTransfer.record.columns.transfer_detail"),
      dataIndex: "transfer_detail",
      hideInSearch: true,
    },
    {
      title: t("fileTransfer.record.columns.status"),
      dataIndex: "status",
      valueEnum: {
        success: { text: "成功", status: "success" },
        processing: { text: "传输中", status: "processing" },
        error: { text: "失败", status: "error" },
      },
    },
    {
      title: t("fileTransfer.record.columns.time"),
      dataIndex: "time",
      valueType: "dateRange",
    },
    {
      title: t("fileTransfer.record.columns.operation"),
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
      <GoBack to="/file-transfer/main" title={t("fileTransfer.record.title")} />
      <ProTable
        className="mt-8"
        columns={columns}
        request={async () => {
          return {
            data: [1],
          };
        }}
        rowKey="id"
      />
    </Div>
  );
};

export default Record;
