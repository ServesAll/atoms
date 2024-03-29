import React, { useState, useEffect } from "react";
import { ButtonWrapper, BorderWrapper, ChildWrapper } from "./TextButton.style";
import LineAnimation from "./LineAnimation";

const TextBtn = ({
  children,
  active,
  disabled = false,
  borderColorActive,
  borderColorIdle,
  onClick = () => {},
  style,
}) => {
  const [isActive, setIsActive] = useState(active);

  useEffect(() => {
    setIsActive(active);
  }, [active]);

  return (
    <ButtonWrapper
      disabled={disabled}
      onPress={() => {
        onClick();
        active !== false && setIsActive(true);
      }}
    >
      <ChildWrapper>{children}</ChildWrapper>
      <BorderWrapper>
        <LineAnimation
          active={isActive}
          borderColorActive={borderColorActive}
          borderColorIdle={borderColorIdle}
        />
      </BorderWrapper>
    </ButtonWrapper>
  );
};

export default TextBtn;
