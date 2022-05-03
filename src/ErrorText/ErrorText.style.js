import styled from "styled-components/native";

export const Wrapper = styled.View`
  flex: 1;
  border-radius: ${(props) => props.theme.borderRadius};
  padding: ${(props) => props.theme.padding};
  border-width: 2px;
  border-color: ${(props) => props.theme.red};
  background-color: ${(props) => props.theme.redlight};
  ${(props) => props.style};
`;

export const ErrorWrapper = styled.View`
  position: absolute;
  top: -10px;
  left: -10px;
  ${(props) => props.style};
`;
