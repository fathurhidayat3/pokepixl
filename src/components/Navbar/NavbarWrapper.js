import styled from "styled-components";

const NavbarWrapper = styled.nav`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0 auto;
  padding: 0 16px;

  height: inherit;
  width: calc(100% - 32px);
  max-width: 480px;
`;

export default NavbarWrapper;
