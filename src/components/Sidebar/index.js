import React from "react";
// Dependencies
import { SidebarContext } from "../../contexts/sidebar-context";
// Components
import Icon from "../commons/Icon";
import NavbarButton from "../Navbar/NavbarButton";
import Sidebar from "./Sidebar";
import SidebarNav from "./SidebarNav";

const SidebarComponent = () => {
  const contextSidebar = React.useContext(SidebarContext);

  return (
    <Sidebar isOpen={contextSidebar.isOpen}>
      <SidebarNav>
        <h3 style={{ color: "#293462" }}>Menu</h3>
        <NavbarButton onClick={contextSidebar.toggleSidebar}>
          <Icon className="fa fa-times" />
        </NavbarButton>
      </SidebarNav>
    </Sidebar>
  );
};

export default SidebarComponent;
