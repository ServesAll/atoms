import styled from "styled-components/native";

export const ListItemsWrapper = styled.View`
  flex: 1;
  align-items: stretch;
  justify-content: flex-start;
  ${(props) => props.style};
`;

export const ItemWrapper = styled.View`
  ${(props) => props.lineColor && "border-left-width: 1px"};
  ${(props) => props.lineColor && `border-color: ${props.lineColor}`};
  ${(props) => props.style};
`;

export const DividerItemWrapper = styled.View`
  ${(props) => props.dividerTwo && props.lineColor && "border-left-width: 1px"};
  ${(props) =>
    props.dividerTwo && props.lineColor && `border-color: ${props.lineColor}`};
  ${(props) => props.style};
`;
