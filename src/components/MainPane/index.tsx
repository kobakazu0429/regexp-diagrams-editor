import React, { FC } from "react";
import styled from "styled-components";

export const MainPane: FC = () => {
  return (
    <Wrapper>
      <div>
        <p>header/controller</p>
      </div>
      <EditorWrapper>
        <p>editor/main</p>
      </EditorWrapper>
      <div>
        <p>result</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const EditorWrapper = styled.div`
  height: 100%;
  background-color: rgb(60, 60, 60);
  background-size: 50px 50px;
  display: flex;
  flex: 1;
  background-image: linear-gradient(
      0deg,
      transparent 24%,
      rgba(255, 255, 255, 0.05) 25%,
      rgba(255, 255, 255, 0.05) 26%,
      transparent 27%,
      transparent 74%,
      rgba(255, 255, 255, 0.05) 75%,
      rgba(255, 255, 255, 0.05) 76%,
      transparent 77%,
      transparent
    ),
    linear-gradient(
      90deg,
      transparent 24%,
      rgba(255, 255, 255, 0.05) 25%,
      rgba(255, 255, 255, 0.05) 26%,
      transparent 27%,
      transparent 74%,
      rgba(255, 255, 255, 0.05) 75%,
      rgba(255, 255, 255, 0.05) 76%,
      transparent 77%,
      transparent
    );
`;
