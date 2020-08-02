import React, { FC } from "react";
import styled from "styled-components";
import createEngine, {
  DiagramModel,
  DefaultNodeModel,
  DefaultLinkModel
} from "@projectstorm/react-diagrams";
import { CanvasWidget } from "@projectstorm/react-canvas-core";

const Sample: FC = () => {
  //1) setup the diagram engine
  const engine = createEngine();

  //2) setup the diagram model
  const model = new DiagramModel();

  //3-A) create a default node
  const node1 = new DefaultNodeModel({
    name: "Node 1",
    color: "rgb(0,192,255)"
  });
  node1.setPosition(100, 100);
  const port1 = node1.addOutPort("Out");

  //3-B) create another default node
  const node2 = new DefaultNodeModel("Node 2", "rgb(192,255,0)");
  const port2 = node2.addInPort("In");
  node2.setPosition(400, 100);

  // link the ports
  const link1 = port1.link<DefaultLinkModel>(port2);
  link1.getOptions().testName = "Test";
  link1.addLabel("Hello World!");

  //4) add the models to the root graph
  model.addAll(node1, node2, link1);

  //5) load model into engine
  engine.setModel(model);

  //6) render the diagram!
  return <CanvasWidget engine={engine} />;
};

export const MainPane: FC = () => {
  return (
    <Wrapper>
      <div>
        <p>header/controller</p>
      </div>
      <EditorWrapper>
        <Sample />
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
  > * {
    height: 100%;
    min-height: 100%;
    width: 100%;
  }
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
