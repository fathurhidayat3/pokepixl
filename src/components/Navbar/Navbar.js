import styled from "styled-components";

const Navbar = styled.nav`
  height: 50px;

  background: ${props =>
    props.backgroundColor ? props.backgroundColor : "white"};
`;

export default Navbar;
