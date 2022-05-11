import styled from "styled-components/native";

export const InputWrapper = styled.Pressable`
  min-height: 70px;
`;

export const InputElement = styled.TextInput`
  min-height: 40px;
  font-family: ${(props) => props.theme.fontFamily2};
  font-size: ${(props) => props.theme.small};
  color: ${(props) => props.theme.color2};
  background-color: ${(props) =>
    props.active ? props.theme.color1 : props.theme.color10};
`;
export const BorderWrapper = styled.View`
  min-height: 70px;
  padding-top: 26px;
  border-width: 2px;
  border-color: ${(props) => props.color};
  border-radius: ${(props) => props.theme.borderRadiusSmall};
  background-color: ${(props) =>
    props.active ? props.theme.color1 : props.theme.color10};
`;
