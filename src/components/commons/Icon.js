import styled from "styled-components";

const Icon = styled.i`
  font-size: 12;
  color: ${props => (props.color ? props.color : "#293462")};
`;

export default Icon;
