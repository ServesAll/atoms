import styled from "styled-components";

export const IconWrapper = styled.div`
  align-items: center;
  justify-content: center;
  height: ${(props) => props.theme[props.size]};
  width: ${(props) => props.theme[props.size]};
  ${(props) => props.style};
`;
