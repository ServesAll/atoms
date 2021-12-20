import styled from "styled-components/native";

export const InputWrapper = styled.Pressable`
  min-height: 80px;
`;

export const InputElement = styled.TextInput`
  margin-top: 26px;
  min-height: 50px;
  font-family: ${(props) => props.theme.fontFamily2};
  font-size: ${(props) => props.theme.small};
  color: ${(props) => props.theme.color2};
`;
export const BorderWrapper = styled.View`
  height: 4px;
`;
