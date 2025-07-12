import styled from "styled-components/native";

export const ButtonWrapper = styled.View``;

export const ButtonStyle = styled.Pressable`
  min-height: ${(props) => {
    if (props.size === "big") {
      return "70px";
    } else if (props.size === "small") {
      return "56px";
    } else if (props.size === "xsmall") {
      return "40px";
    } else {
      return "70px";
    }
  }};
  min-width: ${(props) => {
    if (props.size === "big") {
      return "70px";
    } else if (props.size === "small") {
      return "56px";
    } else if (props.size === "xsmall") {
      return "40px";
    } else {
      return "70px";
    }
  }};
  border-radius: 50px;
  background-color: ${(props) => props.color};
  opacity: ${(props) => (props.active ? 1 : 0.7)};
  ${(props) => props.style};
`;
