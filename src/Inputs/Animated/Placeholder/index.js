import React, {useEffect} from 'react';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const PlaceholderElement = React.memo(({children, active}) => {
  const bottom = useSharedValue(active ? 50 : 4);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      bottom: withTiming(bottom.value, {
        duration: 250,
        easing: Easing.bezier(0.19, 1.0, 0.22, 1.0),
      })
    };
  });

  useEffect(() => {
    if(active){ (bottom.value = 50) };
    if(!active){ (bottom.value = 4) };
  }, [active]);

  return (
    <Animated.View
      style={[
        {
          position: 'absolute',
          zIndex: 1,
          top: 0,
          justifyContent: 'center',
        },
        animatedStyle,
      ]}>
      {children}
    </Animated.View>
  );
});

export default PlaceholderElement;
