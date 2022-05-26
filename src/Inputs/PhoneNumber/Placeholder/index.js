import React, { useEffect } from "react";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const PlaceholderElement = React.memo(({ children, active }) => {
  const top = useSharedValue(active ? 10 : 30);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      top: withTiming(top.value, {
        duration: 250,
        easing: Easing.bezier(0.19, 1.0, 0.22, 1.0),
      }),
    };
  });

  useEffect(() => {
    if (active) {
      top.value = 10;
    }
    if (!active) {
      top.value = 30;
    }
  }, [active]);

  return (
    <Animated.View
      style={[
        {
          position: "absolute",
          zIndex: 1,
          justifyContent: "center",
        },
        animatedStyle,
      ]}
    >
      {children}
    </Animated.View>
  );
});

export default PlaceholderElement;
