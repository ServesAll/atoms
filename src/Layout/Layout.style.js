import styled from "styled-components/native";
import { Platform } from "react-native";

const DEFAULT_FLEX_DIRECTION = Platform.OS === "web" ? "column" : "column";

export const CenterElement = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
  flex-direction: ${(props) => props.flexDirection || DEFAULT_FLEX_DIRECTION};
  ${(props) => props.style};
`;

export const CenterLeftElement = styled.View`
  align-items: ${(props) =>
    (props.flexDirection || DEFAULT_FLEX_DIRECTION) === "row"
      ? "center"
      : "flex-start"};
  justify-content: ${(props) =>
    (props.flexDirection || DEFAULT_FLEX_DIRECTION) === "row"
      ? "flex-start"
      : "center"};
  flex: 1;
  flex-direction: ${(props) => props.flexDirection || DEFAULT_FLEX_DIRECTION};
  ${(props) => props.style};
`;

export const CenterRightElement = styled.View`
  align-items: ${(props) =>
    (props.flexDirection || DEFAULT_FLEX_DIRECTION) === "row"
      ? "center"
      : "flex-end"};
  justify-content: ${(props) =>
    (props.flexDirection || DEFAULT_FLEX_DIRECTION) === "row"
      ? "flex-end"
      : "center"};
  flex: 1;
  flex-direction: ${(props) => props.flexDirection || DEFAULT_FLEX_DIRECTION};
  ${(props) => props.style};
`;

export const MarginElement = styled.View`
  margin: ${(props) => props.theme.margin};
  flex-direction: ${(props) => props.flexDirection || DEFAULT_FLEX_DIRECTION};
  ${(props) => props.style};
`;

export const MarginHorizontalElement = styled.View`
  margin: 0 ${(props) => props.theme.margin};
  flex-direction: ${(props) => props.flexDirection || DEFAULT_FLEX_DIRECTION};
  ${(props) => props.style};
`;

export const MarginVerticalElement = styled.View`
  margin: ${(props) => props.theme.margin} 0;
  flex-direction: ${(props) => props.flexDirection || DEFAULT_FLEX_DIRECTION};
  ${(props) => props.style};
`;

export const MarginBottomElement = styled.View`
  margin-bottom: ${(props) => props.theme.margin};
  flex-direction: ${(props) => props.flexDirection || DEFAULT_FLEX_DIRECTION};
  ${(props) => props.style};
`;

export const MarginTopElement = styled.View`
  margin-top: ${(props) => props.theme.margin};
  flex-direction: ${(props) => props.flexDirection || DEFAULT_FLEX_DIRECTION};
  ${(props) => props.style};
`;

export const PaddingElement = styled.View`
  padding: ${(props) => props.theme.padding};
  flex-direction: ${(props) => props.flexDirection || DEFAULT_FLEX_DIRECTION};
  ${(props) => props.style};
`;

export const PaddingHorizontalElement = styled.View`
  padding: 0 ${(props) => props.theme.padding};
  flex-direction: ${(props) => props.flexDirection || DEFAULT_FLEX_DIRECTION};
  ${(props) => props.style};
`;

export const PaddingVerticalElement = styled.View`
  padding: ${(props) => props.theme.padding} 0;
  flex-direction: ${(props) => props.flexDirection || DEFAULT_FLEX_DIRECTION};
  ${(props) => props.style};
`;

export const PaddingTopElement = styled.View`
  padding-top: ${(props) => props.theme.padding};
  flex-direction: ${(props) => props.flexDirection || DEFAULT_FLEX_DIRECTION};
  ${(props) => props.style};
`;

export const RowElement = styled.View`
  flex-direction: row;
  ${(props) => props.style};
`;

export const StretchElement = styled.View`
  align-items: stretch;
  align-self: stretch;
  flex-direction: ${(props) => props.flexDirection || DEFAULT_FLEX_DIRECTION};
  ${(props) => props.style};
`;

export const FullScreenElement = styled.View`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 11;
  flex-direction: ${(props) => props.flexDirection || DEFAULT_FLEX_DIRECTION};
  ${(props) => props.style};
`;

export const WebSmallWrapperElement = styled.View`
  flex-direction: ${(props) => props.flexDirection || DEFAULT_FLEX_DIRECTION};
  width: 500px;
  ${(props) => props.style};
`;
