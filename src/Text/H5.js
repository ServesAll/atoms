import React from "react";
import PropTypes from "prop-types";
import { H5 } from "./Text.style";

const H5Text = ({
  children,
  style,
  align = "left",
  color,
  fontFamily,
  ...rest
}) => {
  return (
    <H5
      {...rest}
      style={style}
      align={align}
      color={color}
      fontFamily={fontFamily}
    >
      {children}
    </H5>
  );
};

H5Text.propTypes = {
  style: PropTypes.object,
};

export default H5Text;
