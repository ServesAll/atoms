import styled from "styled-components/native";

export const Backdrop = styled.View`
  background-color: rgba(0, 0, 0, 0.7);
  flex: 1;
  margin: 0;
`;

export const ForeGround = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.View`
  background-color: ${(props) => props.theme.color1};
  border-radius: ${(props) => props.theme.borderRadius};
  width: 84%;
  height: 84%;
`;
