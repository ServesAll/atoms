import React, { useState } from "react";
import { Animated, Image, Easing, StatusBar } from "react-native";
import BootSplash from "react-native-bootsplash";
import bootsplash_logo from "./assets/bootsplash_logo.png";
import bootsplash_manifest from "./assets/bootsplash_manifest.json";
import { Container } from "./SplashScreen.style";
import { theme } from "../Theme/definitions";

const AnimatedBootSplash = ({ onAnimationEnd }) => {
  const [opacity] = useState(() => new Animated.Value(0));

  const { container, logo /*, brand */ } = BootSplash.useHideAnimation({
    manifest: bootsplash_manifest,
    logo: { uri: bootsplash_logo },
    // darkLogo: require("../assets/bootsplash_dark_logo.png"),
    // brand: require("../assets/bootsplash_brand.png"),
    // darkBrand: require("../assets/bootsplash_dark_brand.png"),
    statusBarTranslucent: true,
    navigationBarTranslucent: false,
    animate: () => {
      // Perform animations and call onAnimationEnd
      Animated.timing(opacity, {
        useNativeDriver: true,
        toValue: 800,
        duration: 250,
        easing: Easing.back(),
      }).start(() => {
        onAnimationEnd();
      });
    },
  });

  return (
    <Animated.View
      {...container}
      style={[
        container.style,
        {
          transform: [
            {
              translateY: opacity,
            },
          ],
        },
      ]}
    >
      <Image {...logo} />
      {/* <Image {...brand} /> */}
    </Animated.View>
  );
};

export default function SplashScreen({ children }) {
  const [visible, setVisible] = useState(true);

  return (
    <Container>
      <StatusBar backgroundColor={theme.color1} barStyle="dark-content" />
      {visible && (
        <AnimatedBootSplash
          onAnimationEnd={() => {
            setVisible(false);
          }}
        />
      )}
      {!visible && children}
    </Container>
  );
}
