import {
  CloudUploadOutlined,
  MoonOutlined,
  SelectOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Div } from "@render/components/common/basic-tag";
import RenderList from "@render/components/common/render-list";
import { Flex, Typography } from "antd";
import type { FC } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";

interface NavigateCardProps {}

const NavigateCard: FC<NavigateCardProps> = () => {
  const { t } = useTranslation();
  const list = [
    {
      key: "file-transfer/main",
      title: t("home.navigate.fileTransfer.title"),
      description: t("home.navigate.fileTransfer.description"),
      icon: (
        <Div className="w-12 h-12 grid place-items-center rounded-2xl bg-[#DBEAFE] text-[#3B82F6]">
          <CloudUploadOutlined className="text-2xl" />
        </Div>
      ),
    },
    {
      key: "screen-record",
      title: t("home.navigate.screenRecord.title"),
      description: t("home.navigate.screenRecord.description"),
      icon: (
        <Div className="w-12 h-12 grid place-items-center rounded-2xl bg-[#F3E8FF] text-[#A855F7]">
          <VideoCameraOutlined className="text-2xl" />
        </Div>
      ),
    },
    {
      key: "screen-shot",
      title: t("home.navigate.screenShot.title"),
      description: t("home.navigate.screenShot.description"),
      icon: (
        <Div className="w-12 h-12 grid place-items-center rounded-2xl bg-[#DCFCE7] text-[#22C55E]">
          <SelectOutlined className="text-2xl" />
        </Div>
      ),
    },
    {
      key: "ninja-chat",
      title: t("home.navigate.ninjaChat.title"),
      description: t("home.navigate.ninjaChat.description"),
      icon: (
        <Div className="w-12 h-12 grid place-items-center rounded-2xl bg-orange-200 text-[#F59E0B]">
          <MoonOutlined className="text-2xl" />
        </Div>
      ),
    },
  ];

  return (
    <Div className="grid grid-cols-2 gap-4">
      <RenderList
        items={list}
        renderItems={(item) => (
          <Link to={`/${item.key}`}>
            <Div className="p-4 h-24 bg-white rounded-2xl shadow-lg transition-all duration-300 ease-in-out cursor-pointer hover:shadow-2xl">
              <Flex justify="space-between" align="center">
                <Flex vertical justify="center" gap={6}>
                  <Typography.Text strong>{item.title}</Typography.Text>
                  <Typography.Text type="secondary">
                    {item.description}
                  </Typography.Text>
                </Flex>
                {item.icon}
              </Flex>
            </Div>
          </Link>
        )}
      />
    </Div>
  );
};

export default NavigateCard;
