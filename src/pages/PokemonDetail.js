import React from "react";
import { Palette } from "react-palette";
import Badge from "../components/Badge";
import Card from "../components/Card";
import TopWrapper from "../components/TopWrapper";
import BottomWrapper from "../components/BottomWrapper";
import HorizontalText from "../components/commons/HorizontalText";
import StyledText from "../components/commons/StyledText";
import DetailHeader from "../components/DetailHeader";
import DetailImage from "../components/DetailImage";
import DetailContainer from "../components/DetailContainer";
import Flex from "../components/commons/Flex";

class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      backgroundColor: "#ffffff",
      pokemon: this.props.location.param1 ? this.props.location.param1 : {}
    };

    // !this.props.location.param1 && this.props.history.push("/");

    // alert(this.props.match.params.name);
  }

  render() {
    const { pokemon } = this.state;

    return (
      <Palette src={this.state.pokemon.image}>
        {({ data }) => {
          return (
            <DetailContainer backgroundColor={data.lightVibrant}>
              <TopWrapper>
                <DetailHeader>
                  <StyledText size={"h1"} bold>
                    {pokemon.name}
                  </StyledText>
                  <StyledText size={"h5"} bold>
                    {`#${pokemon.id}`}
                  </StyledText>{" "}
                </DetailHeader>

                <div style={{ marginTop: 15 }}>
                  {pokemon.types !== undefined
                    ? pokemon.types.map((typeItem, index) => {
                        return (
                          <Badge
                            text={typeItem}
                            color={{
                              primary: "#ffffff",
                              secondary: data.lightVibrant
                            }}
                            key={index}
                          />
                        );
                      })
                    : null}
                </div>

                <DetailImage src={pokemon.image} alt="pokeimage" style={{}} />
              </TopWrapper>

              <BottomWrapper>
                <Flex>
                  <Flex direction={"column"}>
                    {[
                      { title: "Species", value: pokemon.species },
                      { title: "Height", value: pokemon.height },
                      { title: "Weight", value: pokemon.weight }
                    ].map(textItem => {
                      return (
                        <HorizontalText>
                          <span>{textItem.title}</span>
                          {textItem.value}
                        </HorizontalText>
                      );
                    })}
                  </Flex>

                  <Flex direction={"column"}>
                    {[
                      { title: "Abilities", value: pokemon.abilities },
                      { title: "Gender", value: pokemon.weight }
                    ].map(textItem => {
                      return (
                        <HorizontalText>
                          <span>{textItem.title}</span>
                          {textItem.value}
                        </HorizontalText>
                      );
                    })}
                  </Flex>
                </Flex>

                <div style={{ marginTop: 32 }}>
                  <StyledText>Evolution</StyledText>
                  <div
                    style={{
                      flex: 1,
                      flexWrap: "wrap",
                      display: "flex",
                      margin: "25px -8px"
                    }}
                  >
                    <Card
                      data={{
                        id: 1,
                        name: "Bulbasaur",
                        types: ["grass", "poison"],
                        image:
                          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
                      }}
                    />

                    <Card
                      data={{
                        id: 2,
                        name: "Ivysaur",
                        types: ["grass", "poison"],
                        image:
                          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
                      }}
                    />
                  </div>
                </div>
              </BottomWrapper>
            </DetailContainer>
          );
        }}
      </Palette>
    );
  }
}

export default PokemonDetail;
