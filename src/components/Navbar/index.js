import React from "react";
import { SidebarContext } from "../../contexts/sidebar-context";
import Icon from "../commons/Icon";
import Navbar from "./Navbar";
import NavbarButton from "./NavbarButton";
import NavbarPart from "./NavbarPart";
import NavbarWrapper from "./NavbarWrapper";

const NavbarComponent = () => {
  const contextSidebar = React.useContext(SidebarContext);

  return (
    <Navbar>
      <NavbarWrapper>
        <NavbarPart left>
          <NavbarButton onClick={contextSidebar.toggleSidebar}>
            <Icon className="fa fa-bars" />
          </NavbarButton>
        </NavbarPart>
      </NavbarWrapper>
    </Navbar>
  );
};

export default NavbarComponent;
