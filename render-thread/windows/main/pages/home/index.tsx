import { Div } from "@render/components/common/basic-tag";
import { Button, Flex, Typography } from "antd";
import type { FC } from "react";
import InfoBar from "./_components/info-bar";
import NavigateCard from "./_components/navigate-card";
import ParticleEarth from "./_components/particle-earth";
import RecentFile from "./_components/recent-file";
import Settings from "./_components/settings";

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  return (
    <Div className="w-full h-full flex flex-col p-8 bg-[#f9fafb]">
      <Flex justify="space-between">
        <Typography.Title level={3}>Air Bridge</Typography.Title>
        <Button icon={<Settings />} />
      </Flex>
      <Div className="flex-1 mt-8">
        <Div className="grid grid-cols-2 gap-4">
          <Div>
            <NavigateCard />
            <RecentFile />
          </Div>
          <Div>
            <ParticleEarth />
          </Div>
        </Div>
      </Div>
      <InfoBar />
    </Div>
  );
};

export default Home;
