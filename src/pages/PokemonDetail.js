import React from "react";
import { Palette } from "react-palette";
import gql from "graphql-tag";
import { Query } from "react-apollo";
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
  render() {
    const GET_POKEMON_BY_NAME = gql`
      {
        getPokemonByName(name: "${this.props.match.params.name}") {
          id
          name
          abilities
          height
          weight
          types
          image
          species
        }
      }
    `;

    return (
      <Query query={GET_POKEMON_BY_NAME}>
        {({ loading, error, data }) => {
          if (loading) return <div className="empty-state">Loading...</div>;
          if (error)
            return <div className="empty-state">Error! ${error.message}</div>;

          let pokemon = data.getPokemonByName;

          return (
            <Palette src={pokemon.image}>
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
                        </StyledText>
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

                      <DetailImage
                        src={pokemon.image}
                        alt="pokeimage"
                        style={{}}
                      />
                    </TopWrapper>

                    <BottomWrapper>
                      <Flex>
                        <Flex direction={"column"}>
                          {[
                            {
                              title: "Height",
                              value: pokemon.height
                            },
                            {
                              title: "Weight",
                              value: pokemon.weight
                            }
                          ].map((textItem, index) => {
                            return (
                              <HorizontalText key={index}>
                                <span>{textItem.title}</span>
                                {textItem.value}
                              </HorizontalText>
                            );
                          })}
                        </Flex>

                        <Flex direction={"column"}>
                          {[
                            {
                              title: "Species",
                              value: pokemon.species
                            },
                            {
                              title: "Abilities",
                              value: pokemon.abilities.join(", ")
                            }
                          ].map((textItem, index) => {
                            return (
                              <HorizontalText key={index}>
                                <span>{textItem.title}</span>
                                {textItem.value}
                              </HorizontalText>
                            );
                          })}
                        </Flex>
                      </Flex>

                      <div style={{ marginTop: 32 }}>
                        <StyledText bold>Evolution</StyledText>
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
        }}
      </Query>
    );
  }
}

export default PokemonDetail;
