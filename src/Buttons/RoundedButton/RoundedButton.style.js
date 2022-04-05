import styled from "styled-components/native";

export const ButtonWrapper = styled.View``;

export const ButtonStyle = styled.Pressable`
  min-height: 60px;
  flex: 1;
  border-radius: ${(props) => props.theme.borderRadius};
  background-color: ${(props) => props.color};
  opacity: ${(props) => (props.active ? 1 : 0.7)};
  ${(props) => props.style};
`;
