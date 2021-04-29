import React, { useEffect } from "react";
import { ButtonStyle } from "./FloatingButton.style";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  withSequence,
  Easing,
} from "react-native-reanimated";

const RoundBtn = ({
  children,
  active,
  color,
  onClick = () => {},
  loading,
  LoaderElement,
  successElement,
  success,
}) => {
  const scale = useSharedValue(1);
  const width = useSharedValue(80);

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

  const animatedWidth = useAnimatedStyle(() => {
    return {
      width: width.value,
    };
  });

  useEffect(() => {
    if (active) {
      setTimeout(
        () =>
          (width.value = withTiming(250, {
            duration: 450,
            easing: Easing.in(Easing.elastic(2)),
          })),
        200
      );
    } else {
      setTimeout(
        () =>
          (width.value = withTiming(80, {
            duration: 450,
            easing: Easing.in(Easing.elastic(2)),
          })),
        200
      );
    }
  }, [active]);

  useEffect(() => {
    loading &&
      (width.value = withTiming(80, {
        duration: 250,
      }));
  }, [loading]);

  return (
    <Animated.View style={[animatedStyle, animatedWidth]}>
      <ButtonStyle
        active={active}
        color={color}
        onPress={() => {
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
        {success && successElement}
        {!success && loading && LoaderElement}
        {!success && !loading && children}
      </ButtonStyle>
    </Animated.View>
  );
};

export default RoundBtn;
