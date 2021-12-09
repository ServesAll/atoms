import React, { useEffect } from "react";
import { Dimensions } from "react-native";
import { Center } from "../../Layout";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  Easing,
} from "react-native-reanimated";
import FloatingButton from "./FloatingButton";

const AnimatedButton = ({
  children,
  active,
  color,
  onClick = () => {},
  loading,
  leftElement,
  LoaderElement,
  successElement,
  success,
  error,
  errorElement,
  style,
}) => {
  const scale = useSharedValue(0);
  const width = useSharedValue(70);
  const height = useSharedValue(70);
  const right = useSharedValue(0);
  const left = useSharedValue(0);
  const bottom = useSharedValue(10);

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

  const animatedAbsolute = useAnimatedStyle(() => {
    return {
      minWidth: width.value,
      height: height.value,
      right: right.value,
      left: left.value,
      bottom: bottom.value,
    };
  });

  useEffect(() => {
    scale.value = withTiming(1, {
      duration: 450,
      easing: Easing.in(Easing.elastic(2)),
    });
  }, []);

  useEffect(() => {
    if (loading) {
      width.value = withTiming(Dimensions.get("window").width, {
        duration: 250,
      });
      height.value = withTiming(Dimensions.get("window").height, {
        duration: 250,
      });
      right.value = withTiming(0, {
        duration: 250,
        easing: Easing.in(Easing.elastic(2)),
      });
      bottom.value = withTiming(0, {
        duration: 250,
        easing: Easing.in(Easing.elastic(2)),
      });
    } else {
      setTimeout(() => {
        width.value = withTiming(
          leftElement
            ? Dimensions.get("window").width / 2
            : Dimensions.get("window").width - 60,
          {
            duration: 200,
          }
        );
        height.value = withTiming(70, {
          duration: 200,
        });
        right.value = withTiming(0, {
          duration: 200,
          easing: Easing.in(Easing.elastic(2)),
        });
        bottom.value = withTiming(10, {
          duration: 200,
          easing: Easing.in(Easing.elastic(2)),
        });
      }, 600);
    }
  }, [loading]);

  return (
    <Animated.View
      style={[
        {
          flex: 1,
          position: "absolute",
          height: 70,
          minWidth: 70,
          zIndex: 11,
          backgroundColor:
            loading || success || error
              ? "rgba(255, 255, 255, 0.8)"
              : "rgba(255, 255, 255, 0)",
        },
        animatedAbsolute,
      ]}
    >
      <Center>
        <Animated.View style={[animatedStyle]}>
          <FloatingButton
            active={active}
            color={color}
            onClick={onClick}
            loading={loading}
            leftElement={leftElement}
            LoaderElement={LoaderElement}
            successElement={successElement}
            errorElement={errorElement}
            success={success}
            error={error}
            style={style}
          >
            {children}
          </FloatingButton>
        </Animated.View>
      </Center>
    </Animated.View>
  );
};

export default AnimatedButton;
