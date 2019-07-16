import styled from "styled-components";

const DetailContainer = styled.div`
  flex: 1;
  flex-wrap: wrap;
  display: flex;
  margin: -16px;
  background: ${props =>
    props.backgroundColor ? props.backgroundColor : "#ffffff"};
`;

export default DetailContainer;
