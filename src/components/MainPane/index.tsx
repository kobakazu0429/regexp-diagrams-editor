/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC } from "react";
import styled from "@emotion/styled";
import {
  DefaultNodeModel,
  DefaultLinkModel,
  DiagramModel,
  DefaultPortModel
} from "@projectstorm/react-diagrams";
import { CanvasWidget } from "@projectstorm/react-canvas-core";
import { useReactDiagrams } from "../../Contexts/ReactDiagramsContext";

function createNode(name: string): DefaultNodeModel {
  return new DefaultNodeModel(name, "rgb(0,192,255)");
}

let count = 0;

function connectNodes(nodeFrom: DefaultNodeModel, nodeTo: DefaultNodeModel) {
  count++;
  const portOut = nodeFrom.addPort(
    new DefaultPortModel(true, `out-${count}`, "Out")
  );
  const portTo = nodeTo.addPort(
    new DefaultPortModel(false, `to-${count}`, "IN")
  );

  return portOut.link(portTo);
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const createInOutNodes = (model: DiagramModel): void => {
  const nodesFrom: DefaultNodeModel[] = [];
  const nodesTo: DefaultNodeModel[] = [];

  nodesFrom.push(createNode("from-1"));
  nodesFrom.push(createNode("from-2"));
  nodesFrom.push(createNode("from-3"));

  nodesTo.push(createNode("to-1"));
  nodesTo.push(createNode("to-2"));
  nodesTo.push(createNode("to-3"));

  //4) link nodes together
  const links = nodesFrom.map((node, index) => {
    return connectNodes(node, nodesTo[index]);
  });

  // more links for more complicated diagram
  links.push(connectNodes(nodesFrom[0], nodesTo[1]));
  links.push(connectNodes(nodesTo[0], nodesFrom[1]));
  links.push(connectNodes(nodesFrom[1], nodesTo[2]));

  // initial random position
  nodesFrom.forEach((node, index) => {
    node.setPosition(index * 100, index * 100);
    model.addNode(node);
  });

  nodesTo.forEach((node, index) => {
    node.setPosition(index * 100, 100);
    model.addNode(node);
  });

  links.forEach(link => {
    model.addLink(link);
  });
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
function createSimpleNodes(model: DiagramModel) {
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
}

const Sample: FC = () => {
  const { engine, model } = useReactDiagrams();

  createInOutNodes(model);
  engine.setModel(model);

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
