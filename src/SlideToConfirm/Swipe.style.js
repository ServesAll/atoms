import styled from "styled-components/native";
import Animated from "react-native-reanimated";

export const Wrapper = styled.View`
  flex: 1;
`;

export const RoundWrapper = styled(Animated.View)`
  width: 100%;
  border-radius: ${(props) => props.theme.borderRadius};
  overflow: hidden;
  padding: 8px;
  border-width: 2px;
  ${(props) => props.style};
`;

export const RoundSlider = styled.View`
  width: 62px;
  height: 52px;
  background-color: ${(props) => props.theme.color1};
  border-radius: ${(props) => props.theme.borderRadiusMedium};
  border-width: 2px;
  ${(props) => props.style};
`;
