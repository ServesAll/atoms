import React, { useState, useEffect, useRef } from "react";
import { View } from "react-native";
import LottieView from "lottie-react-native";
import switchIcon from "./switch.json";
import { RoundedBtn } from "../Buttons";
import colors from "../Theme/definitions/colors";
import { Center } from "../Layout";

const CheckMark = ({ fat, isEnabled, micro, mini }) => {
  const size = () => {
    if (micro) return -7;
    if (mini) return -30;
    return 10;
  };

  const loadingRef = useRef();
  return (
    <View
      style={{
        position: "absolute",
        top: size(),
        right: size(),
        width: 30,
        height: 30,
        borderRadius: 15,
        borderWidth: fat ? 2 : 1,
        borderColor: isEnabled ? colors.color1 : colors.color7,
        backgroundColor: colors.color1,
      }}
    >
      <Center>
        {isEnabled && (
          <LottieView
            ref={loadingRef}
            style={{
              height: 30,
              width: 30,
            }}
            autoPlay={true}
            loop={false}
            source={switchIcon}
          />
        )}
      </Center>
    </View>
  );
};

export default function Switch({
  children,
  enabled = true,
  value = false,
  onValueChange = () => {},
  micro = false,
  mini = false,
  fat = false,
  radio = false,
  borderColor = false,
  style,
}) {
  const [isEnabled, setIsEnabled] = useState(value);
  const toggleSwitch = () => {
    enabled &&
      setIsEnabled((previousState) => {
        onValueChange(!previousState);
        return !radio ? !previousState : true;
      });
  };

  useEffect(() => {
    setIsEnabled(value);
  }, [value]);

  return (
    <RoundedBtn
      style={{
        borderWidth: fat ? 2 : 1,
        borderColor: isEnabled
          ? borderColor
            ? borderColor
            : colors.color15
          : borderColor
          ? borderColor
          : colors.color7,
        opacity: enabled ? 1 : 0.6,
        ...style,
      }}
      color="transparent"
      onClick={toggleSwitch}
    >
      {children}
      <CheckMark fat={fat} isEnabled={isEnabled} micro={micro} mini={mini} />
    </RoundedBtn>
  );
}
