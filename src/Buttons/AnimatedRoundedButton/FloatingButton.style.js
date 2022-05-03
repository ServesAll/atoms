import styled from "styled-components/native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

export const ButtonStyle = styled(TouchableWithoutFeedback)`
  height: 54px;
  width: 100%;
  border-radius: ${(props) => props.theme.borderRadiusMedium};
  background-color: ${(props) =>
    props.success || props.error ? "transparent" : props.color};
  opacity: ${(props) => (props.active ? 1 : 0.7)};
  ${(props) => props.style};
`;
