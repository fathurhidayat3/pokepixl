import React from "react";
import { withRouter } from "react-router-dom";
import StyledText from "../commons/StyledText";
import Navbar from "./Navbar";
import NavbarWrapper from "./NavbarWrapper";

const NavbarComponent = props => {
  return (
    <Navbar>
      <NavbarWrapper>
        <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <StyledText size={"h2"} bold onClick={() => props.history.push("/")}>
            Pokepixl
          </StyledText>
        </div>
      </NavbarWrapper>
    </Navbar>
  );
};

export default withRouter(NavbarComponent);
