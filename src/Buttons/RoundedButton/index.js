import React from "react";
import { ButtonWrapper, ButtonStyle } from "./RoundedButton.style";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  withSequence,
  useDerivedValue,
  Easing,
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
    <ButtonWrapper>
      <Animated.View style={[animatedStyle]}>
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
                easing: Easing.in(Easing.elastic(2)),
              })
            );
            onClick();
          }}
        >
          {children}
        </ButtonStyle>
      </Animated.View>
    </ButtonWrapper>
  );
};

export default RoundedBtn;
