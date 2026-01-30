"use client";
import * as React from "react";

export function useColorScheme() {
  const [colorScheme, setColorScheme] = React.useState("light");

  React.useEffect(() => {
    if (typeof window.matchMedia !== "function") return;

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => setColorScheme(media.matches ? "dark" : "light");

    // Set initial on mount
    handleChange();

    if (typeof media.addEventListener === "function") {
      media.addEventListener("change", handleChange);
      return () => media.removeEventListener("change", handleChange);
    }

    // Fallback for older browsers without addEventListener
    if ("onchange" in media) {
      media.onchange = handleChange;
      return () => {
        media.onchange = null;
      };
    }

    // No supported listener API; nothing to clean up
    return;
  }, []);

  return colorScheme;
}
