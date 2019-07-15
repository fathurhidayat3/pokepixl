import React from "react";
// Dependencies
import { BrowserRouter as Router, Route } from "react-router-dom";
import { SidebarContext } from "./contexts/sidebar-context";
// Pages
import Home from "./pages/Home";
import PokemonDetail from "./pages/PokemonDetail";
// Components
import ContentWrapper from "./components/ContentWrapper";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      toggleSidebar: this.toggleSidebar,
      backgroundColor: "#ffffff",
      setNavBackgroundColor: this.setNavBackgroundColor
    };
  }

  toggleSidebar = () => {
    this.setState(state => ({
      isOpen: state.isOpen === true ? false : true
    }));
  };

  setNavBackgroundColor = color => {
    this.setState(state => ({
      backgroundColor: color
    }));
  };

  render() {
    return (
      <Router>
        <SidebarContext.Provider value={this.state}>
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
            <Sidebar />
          </div>
        </SidebarContext.Provider>
      </Router>
    );
  }
}

export default App;
