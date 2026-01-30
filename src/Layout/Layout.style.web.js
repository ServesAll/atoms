import styled from "styled-components";
import { Platform } from "react-native";

const DEFAULT_FLEX_DIRECTION = Platform.OS === "web" ? "column" : "column";

export const CenterElement = styled.div`
  align-items: center;
  justify-content: center;
  flex: 1;
  flex-direction: ${(props) => props.direction || DEFAULT_FLEX_DIRECTION};
  display: flex;
  ${(props) => props.style};
`;

export const CenterLeftElement = styled.div`
  align-items: ${(props) =>
    (props.direction || DEFAULT_FLEX_DIRECTION) === "row"
      ? "center"
      : "flex-start"};
  justify-content: ${(props) =>
    (props.direction || DEFAULT_FLEX_DIRECTION) === "row"
      ? "flex-start"
      : "center"};
  flex: 1;
  flex-direction: ${(props) => props.direction || DEFAULT_FLEX_DIRECTION};
  ${(props) => props.style};
`;

export const CenterRightElement = styled.div`
  align-items: ${(props) =>
    (props.direction || DEFAULT_FLEX_DIRECTION) === "row"
      ? "center"
      : "flex-end"};
  justify-content: ${(props) =>
    (props.direction || DEFAULT_FLEX_DIRECTION) === "row"
      ? "flex-end"
      : "center"};
  flex: 1;
  flex-direction: ${(props) => props.direction || DEFAULT_FLEX_DIRECTION};
  ${(props) => props.style};
`;

export const MarginElement = styled.div`
  margin: ${(props) => props.theme.margin};
  flex-direction: ${(props) => props.direction || DEFAULT_FLEX_DIRECTION};
  ${(props) => props.style};
`;

export const MarginHorizontalElement = styled.div`
  margin: 0 ${(props) => props.theme.margin};
  flex-direction: ${(props) => props.direction || DEFAULT_FLEX_DIRECTION};
  ${(props) => props.style};
`;

export const MarginVerticalElement = styled.div`
  margin: ${(props) => props.theme.margin} 0;
  flex-direction: ${(props) => props.direction || DEFAULT_FLEX_DIRECTION};
  ${(props) => props.style};
`;

export const MarginBottomElement = styled.div`
  margin-bottom: ${(props) => props.theme.margin};
  flex-direction: ${(props) => props.direction || DEFAULT_FLEX_DIRECTION};
  ${(props) => props.style};
`;

export const MarginTopElement = styled.div`
  margin-top: ${(props) => props.theme.margin};
  flex-direction: ${(props) => props.direction || DEFAULT_FLEX_DIRECTION};
  ${(props) => props.style};
`;

export const MarginRightElement = styled.div`
  margin-right: ${(props) => props.theme.margin};
  flex-direction: ${(props) => props.direction || DEFAULT_FLEX_DIRECTION};
  ${(props) => props.style};
`;

export const MarginLeftElement = styled.div`
  margin-left: ${(props) => props.theme.margin};
  flex-direction: ${(props) => props.direction || DEFAULT_FLEX_DIRECTION};
  ${(props) => props.style};
`;

export const PaddingElement = styled.div`
  padding: ${(props) => props.theme.padding};
  flex-direction: ${(props) => props.direction || DEFAULT_FLEX_DIRECTION};
  ${(props) => props.style};
`;

export const PaddingHorizontalElement = styled.div`
  padding: 0 ${(props) => props.theme.padding};
  flex-direction: ${(props) => props.direction || DEFAULT_FLEX_DIRECTION};
  ${(props) => props.style};
`;

export const PaddingVerticalElement = styled.div`
  padding: ${(props) => props.theme.padding} 0;
  flex-direction: ${(props) => props.direction || DEFAULT_FLEX_DIRECTION};
  ${(props) => props.style};
`;

export const PaddingTopElement = styled.div`
  padding-top: ${(props) => props.theme.padding};
  flex-direction: ${(props) => props.direction || DEFAULT_FLEX_DIRECTION};
  ${(props) => props.style};
`;

export const PaddingBottomElement = styled.div`
  padding-bottom: ${(props) => props.theme.padding};
  flex-direction: ${(props) => props.direction || DEFAULT_FLEX_DIRECTION};
  ${(props) => props.style};
`;

export const PaddingLeftElement = styled.div`
  padding-left: ${(props) => props.theme.padding};
  flex-direction: ${(props) => props.direction || DEFAULT_FLEX_DIRECTION};
  ${(props) => props.style};
`;

export const PaddingRightElement = styled.div`
  padding-right: ${(props) => props.theme.padding};
  flex-direction: ${(props) => props.direction || DEFAULT_FLEX_DIRECTION};
  ${(props) => props.style};
`;

export const RowElement = styled.div`
  flex-direction: row;
  display: flex;
  ${(props) => props.style};
`;

export const StretchElement = styled.div`
  align-items: stretch;
  align-self: stretch;
  flex-direction: ${(props) => props.direction || DEFAULT_FLEX_DIRECTION};
  ${(props) => props.style};
`;

export const BoxElement = styled.div`
  flex: 1;
  flex-direction: ${(props) => props.direction || DEFAULT_FLEX_DIRECTION};
  ${(props) => props.style};
`;

export const BorderBottomElement = styled.div`
  border-bottom-width: 2px;
  border-color: ${(props) => props.theme.border};
  border-style: solid;
  ${(props) => props.style};
`;

export const BorderTopElement = styled.div`
  border-top-width: 2px;
  border-color: ${(props) => props.theme.border};
  border-style: solid;
  ${(props) => props.style};
`;

export const BorderBoxElement = styled.div`
  border-width: 2px;
  border-color: ${(props) => props.theme.border};
  border-radius: ${(props) => props.theme.borderRadiusSmall};
  overflow: hidden;
  border-style: solid;
  ${(props) => props.style};
`;

export const FullScreenElement = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 11;
  flex-direction: ${(props) => props.direction || DEFAULT_FLEX_DIRECTION};
  ${(props) => props.style};
`;

export const WebSmallWrapperElement = styled.div`
  flex-direction: ${(props) => props.direction || DEFAULT_FLEX_DIRECTION};
  width: 500px;
  ${(props) => props.style};
`;

export const ImageWrapperElement = styled.div`
  border-radius: ${(props) => props.theme.borderRadiusSmall};
  background-color: ${(props) => props.theme.color7};
  overflow: hidden;
  ${(props) => props.styles};
`;

export const RoundedBoxElement = styled.div`
  border-radius: ${(props) => props.theme.borderRadiusSmall};
  overflow: hidden;
  ${(props) => props.styles};
`;
