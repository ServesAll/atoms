import React, { useState, useEffect } from "react";
import { NavContainer } from "./BottomNavBar.style";
import BottomNavController from "./BottomNavController";
import { Keyboard } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const BottomNavBar = (props) => {
  const [isFocused, setIsFocused] = useState(false);

  const _keyboardDidShow = () => {
    setIsFocused(true);
  };

  const _keyboardDidHide = () => {
    setIsFocused(false);
  };

  useEffect(() => {
    const showSubscription = Keyboard.addListener(
      "keyboardDidShow",
      _keyboardDidShow
    );
    const hideSubscription = Keyboard.addListener(
      "keyboardDidHide",
      _keyboardDidHide
    );

    // cleanup function
    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  const { children, style } = props;
  if (isFocused) return null;
  return (
    <SafeAreaView>
      <NavContainer style={style}>
        <BottomNavController {...props}>{children}</BottomNavController>
      </NavContainer>
    </SafeAreaView>
  );
};

export default BottomNavBar;
