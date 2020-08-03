import React, { FC } from "react";
import styled from "@emotion/styled";
import { useReactDiagrams } from "../../Contexts/ReactDiagramsContext";

const data = {
  id: "c18f81fe-fdc0-4d55-844a-1deba7f08435",
  offsetX: 0,
  offsetY: 0,
  zoom: 100,
  gridSize: 0,
  layers: [
    {
      id: "a285985a-c934-4895-84be-c6baab591bc9",
      type: "diagram-links",
      isSvg: true,
      transformed: true,
      models: {
        "19dbe2fa-32f1-429e-ad3b-d1992d8f371a": {
          id: "19dbe2fa-32f1-429e-ad3b-d1992d8f371a",
          type: "default",
          source: "2c1a6401-1438-4330-b518-c855ceee6bae",
          sourcePort: "57a1f467-2093-4626-9f10-140ea5ded35e",
          target: "ba2354ff-a772-4925-80a6-be848b1aa50e",
          targetPort: "4df242cc-64e3-4b48-a4be-19de9e77d9b9",
          points: [
            {
              id: "c8bfe170-0f64-4c00-9b15-091e3fa054d9",
              type: "point",
              x: 149.359375,
              y: 132.5
            },
            {
              id: "015f2a22-37a4-406a-943a-5ab234c94904",
              type: "point",
              x: 409.5,
              y: 132.5
            }
          ],
          labels: [
            {
              id: "4396705f-0af5-4c9f-8594-66e9c730b4a1",
              type: "default",
              offsetX: 0,
              offsetY: -23,
              label: "Hello kazu!"
            }
          ],
          width: 3,
          color: "gray",
          curvyness: 50,
          selectedColor: "rgb(0,192,255)"
        }
      }
    },
    {
      id: "80a73ab5-be06-4c54-a2dc-6bee004caae2",
      type: "diagram-nodes",
      isSvg: false,
      transformed: true,
      models: {
        "2c1a6401-1438-4330-b518-c855ceee6bae": {
          id: "2c1a6401-1438-4330-b518-c855ceee6bae",
          type: "default",
          x: 100,
          y: 100,
          ports: [
            {
              id: "57a1f467-2093-4626-9f10-140ea5ded35e",
              type: "default",
              x: 141.859375,
              y: 125,
              name: "Out",
              alignment: "right",
              parentNode: "2c1a6401-1438-4330-b518-c855ceee6bae",
              links: ["19dbe2fa-32f1-429e-ad3b-d1992d8f371a"],
              in: false,
              label: "Out"
            }
          ],
          name: "Node 1",
          color: "rgb(0,192,255)",
          portsInOrder: [],
          portsOutOrder: ["57a1f467-2093-4626-9f10-140ea5ded35e"]
        },
        "ba2354ff-a772-4925-80a6-be848b1aa50e": {
          id: "ba2354ff-a772-4925-80a6-be848b1aa50e",
          type: "default",
          x: 400,
          y: 100,
          ports: [
            {
              id: "4df242cc-64e3-4b48-a4be-19de9e77d9b9",
              type: "default",
              x: 402,
              y: 125,
              name: "In",
              alignment: "left",
              parentNode: "ba2354ff-a772-4925-80a6-be848b1aa50e",
              links: ["19dbe2fa-32f1-429e-ad3b-d1992d8f371a"],
              in: true,
              label: "In"
            }
          ],
          name: "Node 2",
          color: "rgb(192,255,0)",
          portsInOrder: ["4df242cc-64e3-4b48-a4be-19de9e77d9b9"],
          portsOutOrder: []
        }
      }
    }
  ]
};

export const SidePane: FC = () => {
  const { model, engine } = useReactDiagrams();

  return (
    <Wrapper>
      <div>
        <p>sidebar/blocks</p>
        <button onClick={() => console.log(model.serialize())}>
          serialize
        </button>
        <br />
        <button
          onClick={() => {
            model.deserializeModel(JSON.parse(JSON.stringify(data)), engine);
            engine.setModel(model);
          }}
        >
          engine
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
