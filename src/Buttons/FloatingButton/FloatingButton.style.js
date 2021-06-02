import styled from "styled-components/native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

export const ButtonStyle = styled(TouchableWithoutFeedback)`
  border-radius: 50px;
  height: 80px;
  background-color: ${(props) => (props.success ? "transparent" : props.color)};
  opacity: ${(props) => (props.success ? 0 : props.active ? 1 : 0.7)};
`;
