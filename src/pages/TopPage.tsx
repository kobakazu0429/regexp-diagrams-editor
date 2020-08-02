import React, { FC } from "react";
import SplitPane from "react-split-pane";
import { MainPane } from "@/components/MainPane";
import { SidePane } from "@/components/SidePane";

export const TopPage: FC = () => {
  return (
    <SplitPane split="vertical" defaultSize="300px">
      <SidePane />
      <MainPane />
    </SplitPane>
  );
};
