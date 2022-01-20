import styled from "styled-components/native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

export const ButtonStyle = styled(TouchableWithoutFeedback)`
  min-height: 60px;
  border-radius: ${(props) => props.theme.borderRadius};
  background-color: ${(props) =>
    props.success || props.error ? "transparent" : props.color};
  opacity: ${(props) => (props.active ? 1 : 0.7)};
`;
