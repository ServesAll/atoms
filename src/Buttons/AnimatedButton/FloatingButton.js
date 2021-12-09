import React, { useEffect } from "react";
import { Dimensions } from "react-native";
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
  leftElement = false,
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
        (width.value = withTiming(
          leftElement
            ? Dimensions.get("window").width / 2
            : Dimensions.get("window").width - 60,
          {
            duration: 350,
            easing: Easing.in(Easing.elastic(1.4)),
          }
        )),
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
        withTiming(
          leftElement
            ? Dimensions.get("window").width / 2 - 30
            : Dimensions.get("window").width - 60,
          {
            duration: 250,
          }
        )
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
              easing: Easing.in(Easing.elastic(1.4)),
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
