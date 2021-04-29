import React, { useEffect, useState } from "react";
import {
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
} from "react-native";
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
  LoaderElement,
  successElement,
  success,
  style,
}) => {
  const scale = useSharedValue(0);
  const width = useSharedValue(70);
  const height = useSharedValue(70);
  const right = useSharedValue(0);
  const bottom = useSharedValue(0);

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
        width.value = withTiming(200, {
          duration: 200,
        });
        height.value = withTiming(70, {
          duration: 200,
        });
        right.value = withTiming(0, {
          duration: 200,
          easing: Easing.in(Easing.elastic(2)),
        });
        bottom.value = withTiming(0, {
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
            loading || success
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
            LoaderElement={LoaderElement}
            successElement={successElement}
            success={success}
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
