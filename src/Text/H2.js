import React from "react";
import PropTypes from "prop-types";
import { H2 } from "./Text.style";

const H2Text = ({
  children,
  style,
  align = "left",
  color,
  fontFamily,
  ...rest
}) => {
  return (
    <H2
      {...rest}
      style={style}
      align={align}
      color={color}
      fontFamily={fontFamily}
    >
      {children}
    </H2>
  );
};

H2Text.propTypes = {
  style: PropTypes.object,
};

export default H2Text;
