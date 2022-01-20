import styled from "styled-components/native";

export const BorderIdle = styled.View`
  height: 18px;
  background-color: ${(props) => props.color};
  flex: 1;
  position: absolute;
  width: 100%;
  z-index: 10;
`;

export const BorderActive = styled.View`
  height: 18px;
  background-color: ${(props) => props.color};
  z-index: 11;
`;
