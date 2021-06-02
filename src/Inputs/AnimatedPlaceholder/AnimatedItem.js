import React, { useEffect, useState } from "react";
import Animated, {
  useAnimatedStyle,
  withRepeat,
  withTiming,
  useSharedValue,
  runOnJS,
} from "react-native-reanimated";

const AnimatedPlaceholder = ({ children }) => {
  const [childNumber, setChildNumber] = useState(0);
  const fade = useSharedValue(7);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: fade.value,
    };
  });

  const runNewChild = () => {
    setChildNumber((prevChildNumber) => {
      return prevChildNumber >= children.length - 1 ? 0 : prevChildNumber + 1;
    });
  };

  useEffect(() => {
    fade.value = withRepeat(
      withTiming(0, { duration: 2000 }, (finished, currentValue) => {
        if (finished) {
          if (currentValue === 0) {
            runOnJS(runNewChild)();
          }
        }
      }),
      -1,
      true
    );
  }, []);

  return (
    <Animated.View style={[{ opacity: 1 }, animatedStyle]}>
      {children[childNumber]}
    </Animated.View>
  );
};

export default AnimatedPlaceholder;
