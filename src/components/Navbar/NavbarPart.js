import styled from "styled-components";

const NavbarPart = styled.div`
  display: flex;
  justify-content: ${props => (props.right ? "flex-end" : "flex-start")};
  width: 60px;
`;

export default NavbarPart;
