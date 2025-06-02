import {
  DeliveredProcedureOutlined,
  FieldTimeOutlined,
  InboxOutlined,
} from "@ant-design/icons";
import { Div } from "@render/components/common/basic-tag";
import { Button, Flex, Typography, Upload } from "antd";
import type { FC } from "react";
import TargetDevice from "./_components/target-device";

interface FileTransferProps {}

const FileTransfer: FC<FileTransferProps> = () => {
  return (
    <Div className="w-full h-full flex flex-col p-8 bg-[#f9fafb]">
      <Flex justify="space-between">
        <Typography.Title level={4}>文件传输</Typography.Title>
        <Button icon={<FieldTimeOutlined />} />
      </Flex>

      <Div className="my-8">
        <Upload.Dragger>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">
            Click or drag file to this area to upload
          </p>
          <p className="ant-upload-hint">
            Support for a single or bulk upload. Strictly prohibited from
            uploading company data or other banned files.
          </p>
        </Upload.Dragger>
      </Div>
      <Flex justify="space-between" align="center">
        <Typography.Title level={5}>选择目标设备</Typography.Title>
        <Button>
          <DeliveredProcedureOutlined />
          更多设备
        </Button>
      </Flex>
      <TargetDevice />
    </Div>
  );
};

export default FileTransfer;
