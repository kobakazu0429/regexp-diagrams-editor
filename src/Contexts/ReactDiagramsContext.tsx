import React, { FC, createContext, useContext } from "react";
import { DiagramEngine } from "@projectstorm/react-diagrams-core";
import createEngine, { DiagramModel } from "@projectstorm/react-diagrams";

interface IReactDiagramsContext {
  engine: DiagramEngine;
  model: DiagramModel;
}

export const ReactDiagramsContext = createContext({} as IReactDiagramsContext);

export function useReactDiagrams() {
  return useContext(ReactDiagramsContext);
}

export const ReactDiagramsContextProvider: FC = ({ children }) => {
  const engine = createEngine();
  const model = new DiagramModel();

  return (
    <ReactDiagramsContext.Provider value={{ engine, model }}>
      {children}
    </ReactDiagramsContext.Provider>
  );
};
