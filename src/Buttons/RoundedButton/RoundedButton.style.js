import styled from "styled-components/native";

export const ButtonWrapper = styled.View``;

export const ButtonStyle = styled.Pressable`
  min-height: ${(props) => (props.size === "big" ? "60px" : "54px")};
  width: 100%;
  border-radius: ${(props) =>
    props.smallBorder
      ? props.theme.borderRadiusSmall
      : props.theme.borderRadiusMedium};
  background-color: ${(props) =>
    props.active ? props.color : props.theme.greyButton};
  ${(props) => props.style};
`;
