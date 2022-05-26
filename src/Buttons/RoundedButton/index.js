import React from "react";
import { ButtonStyle } from "./RoundedButton.style";
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
  size = "big",
  smallBorder = false,
  hitSlop = 0,
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
    <Animated.View style={[animatedStyle]}>
      <ButtonStyle
        smallBorder={smallBorder}
        hitSlop={hitSlop}
        size={size}
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
        onPress={() => active && onClick()}
      >
        {children}
      </ButtonStyle>
    </Animated.View>
  );
};

export default RoundedBtn;
