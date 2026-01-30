import React from "react";
import Lottie from "lottie-react";
import allCategories from "./Assets";
import { IconWrapper } from "./Icons.style.web";

const Icon = ({
  icon,
  size = "small",
  autoplay,
  loop,
  color = "#5E5E5E",
  style,
}) => {
  const hexToRgbArray = (hex) => {
    const normalized = hex.replace("#", "");
    const bigint = parseInt(normalized, 16);
    const r = ((bigint >> 16) & 255) / 255;
    const g = ((bigint >> 8) & 255) / 255;
    const b = (bigint & 255) / 255;
    return [r, g, b];
  };

  const recolorLottie = (json, hexColor) => {
    const [r, g, b] = hexToRgbArray(hexColor);
    console.log([r, g, b]);
    const cloned = JSON.parse(JSON.stringify(json));

    const recolorShapes = (shapes) => {
      if (!shapes) return;
      shapes.forEach((shape) => {
        if (shape.ty === "fl" && shape.c && shape.c.k) {
          shape.c.k = [r, g, b, 1];
        }
        // recursively handle nested groups
        if (shape.it) recolorShapes(shape.it);
      });
    };

    cloned.layers.forEach((layer) => {
      if (layer.shapes) recolorShapes(layer.shapes);
    });

    return cloned;
  };
  return (
    <IconWrapper size={size}>
      <Lottie
        style={{
          width: "100%",
          height: "100%",
          ...style,
        }}
        autoPlay={autoplay}
        loop={loop}
        animationData={
          color
            ? recolorLottie(allCategories[icon], color)
            : allCategories[icon]
        }
      />
    </IconWrapper>
  );
};

export default Icon;
