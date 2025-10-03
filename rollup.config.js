// rollup.config.js
import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import json from "@rollup/plugin-json";
import nodePolyfills from "rollup-plugin-node-polyfills";
import image from "@rollup/plugin-image";

const dist = "dist";

export default [
  // React Native
  {
    input: "src/index.js",
    output: [
      {
        file: `${dist}/bundle.cjs.js`,
        format: "cjs",
      },
      {
        file: `${dist}/bundle.esm.js`,
        format: "esm",
      },
      {
        name: "@servesall/atoms",
        file: `${dist}/bundle.umd.js`,
        format: "umd",
        globals: {
          react: "React",
          "styled-components/native": "styled-components/native",
          "react-native": "react-native",
          "react-native-safe-area-context": "react-native-safe-area-context",
          "expo-navigation-bar": "expo-navigation-bar",
          "react-native-reanimated": "react-native-reanimated",
          "react-native-gesture-handler": "react-native-gesture-handler",
          "react-native-status-bar-height": "react-native-status-bar-height",
          "lottie-react-native": "lottie-react-native",
          "@killerwink/lottie-react-native-color":
            "@killerwink/lottie-react-native-color",
          "prop-types": "PropTypes",
          "@gorhom/bottom-sheet": "BottomSheet",
          "react-native-bootsplash": "BootSplash",
        },
      },
    ],
    plugins: [
      json(),
      image(),
      resolve({
        extensions: [".js", ".jsx", ".json", ".png"],
      }),
      nodePolyfills(),
      babel({
        babelHelpers: "bundled",
        exclude: "node_modules/**",
      }),
    ],
    external: [
      "react",
      "styled-components",
      "react-native",
      "react-native-safe-area-context",
      "expo-navigation-bar",
      "react-native-reanimated",
      "react-native-gesture-handler",
      "react-native-status-bar-height",
      "lottie-react-native",
      "@killerwink/lottie-react-native-color",
      "styled-components/native",
      "react-native-bootsplash",
      "@gorhom/bottom-sheet",
      "prop-types",
    ],
  },
  // Web
  {
    input: "src/index.web.js",
    output: [
      {
        file: `${dist}/bundle.web.esm.js`,
        format: "esm",
      },
      {
        name: "@servesall/atoms",
        file: `${dist}/bundle.web.umd.js`,
        format: "umd",
        globals: {
          react: "React",
          "styled-components/native": "styled-components/native",
          "react-native": "react-native",
          "react-native-safe-area-context": "react-native-safe-area-context",
          "expo-navigation-bar": "expo-navigation-bar",
          "react-native-reanimated": "react-native-reanimated",
          "react-native-gesture-handler": "react-native-gesture-handler",
          "react-native-status-bar-height": "react-native-status-bar-height",
          "lottie-react-native": "lottie-react-native",
          "@killerwink/lottie-react-native-color":
            "@killerwink/lottie-react-native-color",
          "prop-types": "PropTypes",
          "@gorhom/bottom-sheet": "BottomSheet",
          "react-native-bootsplash": "BootSplash",
        },
      },
    ],
    plugins: [
      json(),
      image(),
      resolve({
        extensions: [".js", ".jsx", ".json", ".png"],
      }),
      nodePolyfills(),
      babel({
        babelHelpers: "bundled",
        exclude: "node_modules/**",
      }),
    ],
    external: [
      "react",
      "styled-components",
      "react-native",
      "react-native-safe-area-context",
      "expo-navigation-bar",
      "react-native-reanimated",
      "react-native-gesture-handler",
      "react-native-status-bar-height",
      "lottie-react-native",
      "@killerwink/lottie-react-native-color",
      "styled-components/native",
      "react-native-bootsplash",
      "@gorhom/bottom-sheet",
      "prop-types",
    ],
  },
];
