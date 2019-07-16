import React from "react";
import { Link } from "react-router-dom";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import Card from "../components/Card";
import DetailContainer from "../components/DetailContainer";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemons: []
    };
  }

  render() {
    const GET_ALL_POKEMON = gql`
      {
        getAllPokemon {
          id
          name
          abilities
          types
          image
        }
      }
    `;

    return (
      <Query query={GET_ALL_POKEMON}>
        {({ loading, error, data }) => {
          if (loading) return <div className="empty-state">Loading...</div>;
          if (error)
            return <div className="empty-state">Error! ${error.message}</div>;

          return (
            <>
              <DetailContainer>
                {data.getAllPokemon.map(dataItem => {
                  return (
                    <Link
                      to={{
                        pathname: `/pokemon/${dataItem.name.toLowerCase()}`,
                        param1: dataItem
                      }}
                      style={{
                        flex: 1,
                        display: "flex",
                        color: "unset"
                      }}
                      key={dataItem.id}
                    >
                      <Card data={dataItem} />
                    </Link>
                  );
                })}
              </DetailContainer>
            </>
          );
        }}
      </Query>
    );
  }
}

export default Home;
