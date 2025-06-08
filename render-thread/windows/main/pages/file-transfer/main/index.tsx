import {
  DeliveredProcedureOutlined,
  FieldTimeOutlined,
  InboxOutlined,
} from "@ant-design/icons";
import { Div } from "@render/components/common/basic-tag";
import { Button, Flex, Typography, Upload } from "antd";
import type { FC } from "react";
import TargetDevice from "./_components/target-device";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import GoBack from "@render/components/common/go-back";

interface FileTransferProps {}

const FileTransfer: FC<FileTransferProps> = () => {
  const { t } = useTranslation();
  return (
    <Div className="w-full h-full flex flex-col p-8 bg-[#f9fafb]">
      <GoBack
        to="/home"
        title={t("home.navigate.fileTransfer.title")}
        rightContent={
          <Link to="/file-transfer/record">
            <Button
              type="link"
              icon={
                <Div className="text-[20px]">
                  <FieldTimeOutlined />
                </Div>
              }
            />
          </Link>
        }
      />

      <Div className="my-8">
        <Upload.Dragger>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">
            {t("fileTransfer.main.upload_title")}
          </p>
          <p className="ant-upload-hint">
            {t("fileTransfer.main.upload_hint")}
          </p>
        </Upload.Dragger>
      </Div>
      <Flex justify="space-between" align="center">
        <Typography.Title level={5}>
          {t("fileTransfer.main.target_device_title")}
        </Typography.Title>
        <Link to="/file-transfer/more-device">
          <Button>
            <DeliveredProcedureOutlined />
            {t("fileTransfer.main.more_device_title")}
          </Button>
        </Link>
      </Flex>
      <TargetDevice />
    </Div>
  );
};

export default FileTransfer;
