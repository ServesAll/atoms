import styled from "styled-components/native";

export const ButtonWrapper = styled.View``;

export const ButtonStyle = styled.Pressable`
  min-height: ${(props) => (props.size === "big" ? "70px" : "56px")};
  border-radius: 50px;
  background-color: ${(props) => props.color};
  opacity: ${(props) => (props.active ? 1 : 0.7)};
  ${(props) => props.style};
`;
