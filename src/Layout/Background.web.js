import React from "react";
import { View } from "react-native";
import { useThemeContext } from "../Theme";

const Background = ({ children, style = {} }) => {
  const theme = useThemeContext();
  const { background } = theme;

  return (
    <View style={{ flex: 1, backgroundColor: background, ...style }}>
      {children}
    </View>
  );
};

export default Background;
