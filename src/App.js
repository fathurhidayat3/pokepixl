import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "react-apollo";
import Home from "./pages/Home";
import PokemonDetail from "./pages/PokemonDetail";
import ContentWrapper from "./components/ContentWrapper";
import Navbar from "./components/Navbar";

const client = new ApolloClient({
  link: new HttpLink({ uri: "http://localhost:8080/graphql" }),
  cache: new InMemoryCache()
});

class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              position: "relative"
            }}
          >
            <Navbar />
            <ContentWrapper>
              <Route exact path="/" component={Home} />
              <Route path="/pokemon/:name" component={PokemonDetail} />
            </ContentWrapper>
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
