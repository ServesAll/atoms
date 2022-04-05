import React from "react";
import { ButtonWrapper, ButtonStyle } from "./RoundedButton.style";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  withSequence,
} from "react-native-reanimated";

const RoundedBtn = ({
  children,
  active = true,
  color,
  onClick = () => {},
  style,
}) => {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: scale.value,
      transform: [
        {
          scale: scale.value,
        },
      ],
    };
  });

  return (
    <Animated.View style={[{ flex: 1 }, animatedStyle]}>
      <ButtonStyle
        active={active}
        color={color}
        style={style}
        onPressIn={() => {
          scale.value = withSequence(
            withTiming(0.9, {
              duration: 80,
            }),
            withTiming(1, {
              duration: 200,
            })
          );
        }}
        onPress={() => onClick()}
      >
        {children}
      </ButtonStyle>
    </Animated.View>
  );
};

export default RoundedBtn;
