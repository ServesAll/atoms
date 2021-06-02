import React, { useEffect } from "react";
import { ButtonStyle } from "./FloatingButton.style";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  withSequence,
  Easing,
  withDelay,
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
  error,
  errorElement,
}) => {
  const scale = useSharedValue(1);
  const width = useSharedValue(70);

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
    setTimeout(
      () =>
        (width.value = withTiming(200, {
          duration: 450,
          easing: Easing.in(Easing.elastic(2)),
        })),
      200
    );
  }, []);

  useEffect(() => {
    if (loading) {
      width.value = withTiming(70, {
        duration: 250,
      });
    } else {
      width.value = withDelay(
        800,
        withTiming(200, {
          duration: 250,
        })
      );
    }
  }, [loading]);

  return (
    <Animated.View style={[animatedStyle, animatedWidth]}>
      <ButtonStyle
        active={active}
        color={color}
        success={success}
        error={error}
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
        {error && errorElement}
        {!success && !error && loading && LoaderElement}
        {!success && !error && !loading && children}
      </ButtonStyle>
    </Animated.View>
  );
};

export default RoundBtn;
