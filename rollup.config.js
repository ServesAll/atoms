// rollup.config.js
import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import json from "@rollup/plugin-json";
import nodePolyfills from "rollup-plugin-node-polyfills";
import image from "@rollup/plugin-image";
import preserveDirectives from "rollup-plugin-preserve-directives";
import url from "@rollup/plugin-url";
import alias from "@rollup/plugin-alias";

// removed custom directive preservation; using rollup-plugin-preserve-directives

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
    ],
    plugins: [
      json(),
      image(),
      resolve({
        extensions: [".js", ".jsx", ".json", ".png", ".ttf"],
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
        dir: `${dist}/bundle.web.esm`,
        format: "esm",
        preserveModules: true,
      },
    ],
    plugins: [
      json(),
      image(),
      url({
        include: [
          "**/*.ttf",
          "**/*.woff",
          "**/*.woff2",
          "**/*.eot",
          "**/*.otf",
        ],
        limit: 0,
        fileName: "assets/[name][hash][extname]",
      }),
      resolve({
        extensions: [".web.js", ".js", ".jsx", ".json", ".png", ".ttf"],
      }),
      nodePolyfills(),
      babel({
        babelHelpers: "bundled",
        exclude: "node_modules/**",
      }),
      preserveDirectives(),
      alias({
        entries: [{ find: "react-native", replacement: "react-native-web" }],
      }),
    ],
    external: [
      "react",
      "react-native-web",
      "styled",
      "react-dom",
      "styled-components",
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
      "next/navigation",
    ],
  },
];
