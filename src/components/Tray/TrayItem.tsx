import React, { FC } from "react";
import styled from "@emotion/styled";

interface Props {
  model: any;
  color: string;
  name: string;
}

export const TrayItemWidget: FC<Props> = ({ color, model, name }) => {
  return (
    <Tray
      color={color}
      draggable={true}
      onDragStart={event => {
        event.dataTransfer.setData("storm-diagram-node", JSON.stringify(model));
      }}
    >
      {name}
    </Tray>
  );
};

const Tray = styled.div<{ color: string }>`
  color: white;
  font-family: Helvetica, Arial;
  padding: 5px;
  margin: 0px 10px;
  border: solid 1px ${p => p.color};
  border-radius: 5px;
  margin-bottom: 2px;
  cursor: pointer;
`;
