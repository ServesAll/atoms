import React from "react";
import { BorderIdle, BorderActive } from "./LineAnimation.style";
import { Row } from "../../../Layout";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const Line = ({ active, borderColorIdle, borderColorActive }) => {
  const widthActive = useSharedValue(0);

  const animatedStyleWidthActive = useAnimatedStyle(() => {
    return active
      ? {
          width: withTiming(widthActive.value, {
            duration: 350,
          }),
        }
      : {
          width: withTiming(0, {
            duration: 350,
          }),
        };
  });

  return (
    <Row>
      <BorderIdle
        color={borderColorIdle}
        onLayout={(e) => (widthActive.value = e.nativeEvent.layout.width)}
      />
      <Animated.View style={[{ zIndex: 11 }, animatedStyleWidthActive]}>
        <BorderActive color={borderColorActive} />
      </Animated.View>
    </Row>
  );
};

export default Line;
