import styled from "styled-components";

const DetailContainer = styled.div`
  margin: -16px;
  background: ${props =>
    props.backgroundColor ? props.backgroundColor : "#ffffff"};
`;

export default DetailContainer;
