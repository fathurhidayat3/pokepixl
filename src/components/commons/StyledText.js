import styled from "styled-components";

const checksize = size => {
  switch (size) {
    case "h1":
      return "24px";
    case "h2":
      return "20px";
    case "h3":
      return "16px";
    case "h4":
      return "14px";
    case "h5":
      return "13px";
    default:
      return "span";
  }
};

const StyledText = styled.span`
  font-size: ${props => (props.size ? checksize(props.size) : "unset")};
  font-weight: ${props => (props.bold ? "bold" : "normal")};
  font-style: ${props => (props.italic ? "italic" : "normal")};
  color: ${props => (props.color ? props.color : "#293462")};
`;

export default StyledText;
