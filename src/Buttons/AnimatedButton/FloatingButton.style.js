import styled from "styled-components/native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

export const ButtonStyle = styled(TouchableWithoutFeedback)`
  border-radius: 35px;
  height: 70px;
  background-color: ${(props) => props.color};
  opacity: ${(props) => (props.active ? 1 : 0.7)};
`;
