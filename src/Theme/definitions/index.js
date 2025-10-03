import colors from "./colors";
import fonts from "./fonts";
import layout from "./layout";

const theme = (colorScheme) => {
  return {
    ...fonts,
    ...layout,
    ...colors.backwardCompatibility,
    ...(colorScheme === "dark" ? colors.darkMode : colors.lightMode),
  };
};

export { theme };
