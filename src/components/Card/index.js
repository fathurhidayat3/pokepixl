import React from "react";
import { usePalette } from "react-palette";
import styled from "styled-components";

import Badge from "../Badge";

const CardWrapper = styled.div`
  flex: 1;
  display: flex;
  margin: 8px;
  min-width: 200px;
`;

const CardContainer = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 250px;
  background: ${props => (props.background ? props.background : "white")};
`;

const CardFloatingPixel = styled.div`
  content: "";
  position: absolute;
  top: ${props => (props.position ? props.position.top : "unset")};
  right: ${props => (props.position ? props.position.right : "unset")};
  left: ${props => (props.position ? props.position.left : "unset")};
  bottom: ${props => (props.position ? props.position.bottom : "unset")};
  background: ${props => (props.background ? props.background : "#ffffff")};
  height: ${props => (props.size ? props.size.height : "16px")};
  width: ${props => (props.size ? props.size.width : "16px")};
`;

const CardImage = styled.img`
  position: absolute;
  left: calc(calc(100% - 150px) / 2);
  bottom: 15px;
  margin: auto;
  z-index: 2;
  height: 150px;
  width: 150px;
`;

const BadgeContainer = styled.div`
  margin-top: 15;
`;

const CardTitle = styled.h3`
  margin: 16px;
`;

const CardBottomId = styled.h5`
  text-align: right;
  margin: 16px;
`;

const Card = props => {
  const { data, loading, error } = usePalette(props.data.image);

  return (
    <CardWrapper>
      <CardContainer background={data.lightVibrant}>
        <CardFloatingPixel position={{ top: "8px", right: "0px" }} />
        <CardFloatingPixel position={{ bottom: "0px", left: "0px" }} />
        <CardFloatingPixel
          position={{ bottom: "-8px", left: "8px" }}
          size={{ height: "8px", width: "8px" }}
          background={data.lightVibrant}
        />

        <CardImage src={props.data.image} alt="pokeimage" />

        <div>
          <CardTitle>{props.data.name}</CardTitle>
          <BadgeContainer>
            {props.data.types.map((typeItem, index) => (
              <Badge
                text={typeItem}
                color={{
                  primary: "#ffffff",
                  secondary: data.lightVibrant
                }}
                key={index}
              />
            ))}
          </BadgeContainer>
        </div>

        <div>
          <CardBottomId>#{props.data.id}</CardBottomId>
        </div>
      </CardContainer>
    </CardWrapper>
  );
};

export default Card;
