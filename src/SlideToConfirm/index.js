import React, { useState, useEffect } from "react";
import { Wrapper, RoundWrapper, RoundSlider } from "./Swipe.style";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  interpolate,
  Extrapolate,
  interpolateColor,
  runOnJS,
} from "react-native-reanimated";
import { theme } from "../Theme/definitions";

const BTN_WIDTH = 62;
const BTN_PADDING = 16;
const BTN_BORDER = 4;
const GRACE_DISTANCE = 15;

const WIDTH_TO_REMOVE = BTN_WIDTH + BTN_PADDING + GRACE_DISTANCE + BTN_BORDER;
const WIDTH_FINAL = BTN_WIDTH + BTN_PADDING + BTN_BORDER;

const SwipeButton = ({
  children,
  borderColor,
  backgroundColor,
  swipeChild,
  onChange = () => {},
}) => {
  const [toggled, setToggled] = useState(false);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    toggled && onChange();
  }, [toggled]);

  const onLayout = (event) => {
    const { width } = event.nativeEvent.layout;
    setWidth(width);
  };

  const x = useSharedValue(0);

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.startX = x.value;
    },
    onActive: (event, ctx) => {
      if (event.translationY > 60 || event.translationY < -60) {
        x.value = withSpring(0);
      } else {
        if (ctx.startX + event.translationX > width - WIDTH_TO_REMOVE) {
          x.value = width - WIDTH_FINAL;
          runOnJS(setToggled)(true);
        } else {
          x.value = ctx.startX + event.translationX;
        }
      }
    },
    onEnd: (_) => {
      if (toggled) {
        x.value = width - WIDTH_FINAL;
      } else {
        x.value = withSpring(0);
      }
    },
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: x.value,
        },
      ],
    };
  });

  const InterpolateXInput = [0, width];

  const colorWave = useAnimatedStyle(() => {
    return {
      width: x.value + BTN_WIDTH + BTN_PADDING,
      opacity: interpolate(x.value, InterpolateXInput, [0, 1]),
    };
  });

  const animatedBorder = useAnimatedStyle(() => {
    return {
      borderColor: interpolateColor(
        x.value,
        [0, width - WIDTH_FINAL],
        [theme.color7, borderColor]
      ),
    };
  });

  const animatedText = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        x.value,
        InterpolateXInput,
        [1, 0],
        Extrapolate.CLAMP
      ),
      transform: [
        {
          translateX: x.value,
        },
      ],
    };
  });

  return (
    <Wrapper onLayout={onLayout}>
      <Animated.View
        style={[
          animatedBorder,
          {
            width: "100%",
            borderRadius: parseInt(theme.borderRadiusMedium, 10),
            overflow: "hidden",
            padding: 8,
            borderWidth: 2,
          },
        ]}
      >
        <Animated.View
          style={[
            colorWave,
            {
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: BTN_WIDTH + BTN_PADDING,
              backgroundColor: backgroundColor,
              borderTopRightRadius: 12,
              borderBottomRightRadius: 12,
            },
          ]}
        />
        <Animated.View
          style={[
            animatedText,
            {
              position: "absolute",
              top: 0,
              bottom: 0,
              left: BTN_WIDTH + BTN_PADDING,
            },
          ]}
        >
          {children}
        </Animated.View>
        <PanGestureHandler onGestureEvent={gestureHandler}>
          <Animated.View style={[animatedStyle]}>
            <RoundSlider style={{ backgroundColor, borderColor }}>
              {swipeChild}
            </RoundSlider>
          </Animated.View>
        </PanGestureHandler>
      </Animated.View>
    </Wrapper>
  );
};

export default SwipeButton;
