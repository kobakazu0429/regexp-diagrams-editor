import React, { FC } from "react";
import styled from "@emotion/styled";
import { MainPane } from "@/components/MainPane";
import { SidePane } from "@/components/SidePane";

export const TopPage: FC = () => {
  return (
    <Wrapper>
      <SidePane />
      <MainPane />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: felx;
  flex-direction: row;
`;
