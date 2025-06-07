import AnimatedContent from "@render/components/common/animated-content";
import { Div } from "@render/components/common/basic-tag";
import GoBack from "@render/components/common/go-back";
import RenderList from "@render/components/common/render-list";
import { Card } from "antd";
import type { FC } from "react";

interface MoreDeviceProps {}

const MoreDevice: FC<MoreDeviceProps> = () => {
  return (
    <Div className="w-full h-full p-8 bg-[#f9fafb]">
      <GoBack to="/file-transfer/main" title="File Transfer" />
      <Div className="w-full mt-8 grid grid-cols-3 gap-8 ">
        <RenderList
          items={[...Array(9)]}
          renderItems={(_, index) => (
            <AnimatedContent duration={index * 0.1 + 1}>
              <Card title="Card title" className="h-[200px]">
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
            </AnimatedContent>
          )}
        />
      </Div>
    </Div>
  );
};

export default MoreDevice;
