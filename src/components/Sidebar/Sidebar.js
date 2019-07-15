import styled from "styled-components";

const Sidebar = styled.aside`
  position: absolute;
  top: 0;
  left: ${props => (props.isOpen ? "0" : "-100%")};

  height: 100%;
  width: 300px;

  background: white;
  border-right: 1px solid #cccccc;

  transition: all 0.3s;

  z-index: 3;
`;

export default Sidebar;
