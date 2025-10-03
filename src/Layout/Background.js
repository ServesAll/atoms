import React from "react";
import { View } from "react-native";
import { useThemeContext } from "../Theme";
import { StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as NavigationBar from "expo-navigation-bar";

const Background = ({ children, style = {} }) => {
  const theme = useThemeContext();
  const { background, colorScheme } = theme;
  const isDarkMode = colorScheme === "dark";

  const statusBarStyle = isDarkMode ? "light-content" : "dark-content";

  NavigationBar.setBackgroundColorAsync(background);
  NavigationBar.setButtonStyleAsync(isDarkMode ? "light" : "dark");

  return (
    <View style={{ flex: 1, backgroundColor: background }}>
      <StatusBar
        translucent={true}
        backgroundColor={background}
        barStyle={statusBarStyle}
      />
      <SafeAreaView style={{ flex: 1, backgroundColor: background, ...style }}>
        {children}
      </SafeAreaView>
      <SafeAreaView
        style={{ flex: 0, backgroundColor: background, ...style }}
      />
    </View>
  );
};

export default Background;
