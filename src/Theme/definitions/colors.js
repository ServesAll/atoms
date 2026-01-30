const colorMap = {
  white: "#FFFFFF",
  hotPink: "#E576A2",
  lightPink: "#FA9EBC",
  salmonPink: "#FFD1E0",
  skyBlue: "#3187F6",
  lightBlue: "#CFEAFF",
  greyBlue: "#212E66",
  blue: "#0B1957",
  darkBlue: "#060630",
};

const colors = {
  backwardCompatibility: {
    // Whites & Grays
    color1: "#FFFFFF", // Pure white
    color7: "#dfe6e9", // Light gray
    color8: "#F8F9FB", // Very light gray
    color10: "#F2F3F7", // Another light gray
    color16: "#636e72", // Dark gray
    greyText: "#b2bec3", // Gray for text
    greyButton: "#94A3A9", // Gray for buttons
    color2: "#2d3436", // Almost black

    // Blues
    color3: "#74b9ff", // Light blue
    color3light: "#E1F0FF", // Very light blue
    color4: "#0984e3", // Medium blue
    blue: "#74b9ff", // Light blue (duplicate)
    blueLight: "#E1F0FF", // Very light blue (duplicate)
    darkBlue: "#0984e3", // Medium blue (duplicate)
    darkBlueLight: "#CFEAFF", // Pale blue
    color15: "#00cec9", // Cyan
    color18: "#81ecec", // Light cyan

    // Yellows
    color5: "#ffeaa7", // Light yellow
    color5light: "#FFF9E5", // Very light yellow
    color5border: "#E4E0D2", // Yellow border
    darkYellow: "#fdcb6e", // Dark yellow
    darkYellowLight: "#FFF7E8", // Light yellow
    darkYellowDark: "#8C6F39", // Brown yellow
    darkYellowGray: "#ECE5D8", // Grayish yellow

    // Oranges & Browns
    color9: "#FFA15F", // Orange
    color9light: "#F9F0EA", // Light orange
    color9dark: "#804F2D", // Dark brown
    color9border: "#DDD1C9", // Orange border
    color13: "#fab1a0", // Peach
    orange: "#FFA15F", // Orange (duplicate)
    orangeLight: "#FFFAF6", // Light orange
    orangeDark: "#3D1901", // Very dark brown
    orangeGray: "#EEE5DE", // Grayish orange

    // Reds
    color6: "#ff7675", // Red
    color6light: "#FFDCDB", // Light red
    red: "#ff7675", // Red (duplicate)
    redlight: "#fff0ed", // Very light red
    redDark: "#9C4140", // Dark red
    redBorder: "#D2BBBB", // Red border

    // Greens
    color11: "#00b894", // Green
    color11light: "#EEFFFC", // Light green
    color11border: "#D2E3E0", // Green border
    color14: "#00b894", // Green (duplicate)
    green: "#55efc4", // Light green
    greenLight: "#F3FFFC", // Very light green
    greenDark: "#236A56", // Dark green

    // Purples
    color12: "#6c5ce7", // Purple
    color12light: "#F5F4FF", // Light purple
    color12border: "#DFDDEA", // Purple border
    color12dark: "#584E74", // Dark purple
    color17: "#6c5ce7", // Purple (duplicate)
    purple: "#6c5ce7", // Purple (duplicate)
    purpleLight: "#F9F8FF", // Light purple
    purpleDark: "#372E78", // Dark purple
  },

  // new colors

  ...colorMap,

  // Light Mode
  lightMode: {
    background: colorMap.salmonPink,
    primaryButton: colorMap.darkBlue,
    primaryButtonText: colorMap.salmonPink,
    secondaryButton: colorMap.skyBlue,
    secondaryButtonText: colorMap.salmonPink,
    primaryText: colorMap.blue,
    secondaryText: colorMap.greyBlue,
    border: colorMap.greyBlue,
  },

  // Dark Mode
  darkMode: {
    background: colorMap.darkBlue,
    primaryButton: colorMap.hotPink,
    primaryButtonText: colorMap.darkBlue,
    secondaryButton: colorMap.skyBlue,
    secondaryButtonText: colorMap.salmonPink,
    primaryText: colorMap.salmonPink,
    secondaryText: colorMap.lightPink,
    border: colorMap.lightPink,
  },
};
export default colors;
