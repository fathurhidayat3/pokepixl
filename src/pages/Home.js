import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Card from "../components/Card";
import StyledText from "../components/commons/StyledText";

const data = require("../data.json");

const HomeContainer = styled.div`
  flex: 1;
  flex-wrap: wrap;
  display: flex;
  margin: 25px -8px;
`;

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemons: []
    };
  }

  render() {
    return (
      <>
        <StyledText size={"h2"} bold>
          Pokepixl
        </StyledText>

        <HomeContainer>
          {data.pokemon.map(dataItem => {
            return (
              <Link
                to={{
                  pathname: `/pokemon/${dataItem.name.toLowerCase()}`,
                  param1: dataItem
                }}
                style={{ flex: 1, display: "flex", color: "unset" }}
                key={dataItem.id}
              >
                <Card data={dataItem} />
              </Link>
            );
          })}
        </HomeContainer>
      </>
    );
  }
}

export default Home;
