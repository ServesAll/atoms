import styled from "styled-components/native";

export const ButtonWrapper = styled.View``;

export const ButtonStyle = styled.Pressable`
  min-height: ${(props) => {
    if (props.size === "big") {
      return "60px";
    } else if (props.size === "small") {
      return "54px";
    } else if (props.size === "xsmall") {
      return "44px";
    } else {
      return "54px";
    }
  }};
  width: 100%;
  border-radius: ${(props) =>
    props.smallBorder
      ? props.theme.borderRadiusSmall
      : props.theme.borderRadiusMedium};
  background-color: ${(props) =>
    props.active ? props.color : props.theme.greyButton};
  ${(props) => props.style};
`;
