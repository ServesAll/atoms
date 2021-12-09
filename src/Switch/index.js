import React, { useState, useEffect, useRef } from "react";
import { View } from "react-native";
import LottieView from "lottie-react-native";
import switchIcon from "./switch.json";
import { RoundedBtn } from "../Buttons";
import colors from "../Theme/definitions/colors";
import { Center } from "../Layout";

const CheckMark = ({ isEnabled, micro }) => {
  const loadingRef = useRef();
  return (
    <View
      style={{
        position: "absolute",
        top: micro ? -7 : 10,
        right: micro ? -7 : 10,
        width: 30,
        height: 30,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: isEnabled ? colors.color1 : colors.color10,
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
}) {
  const [isEnabled, setIsEnabled] = useState(value);
  const toggleSwitch = () => {
    enabled &&
      setIsEnabled((previousState) => {
        onValueChange(!previousState);
        return !previousState;
      });
  };

  useEffect(() => {
    setIsEnabled(value);
  }, [value]);

  return (
    <RoundedBtn
      style={{
        borderWidth: 1,
        borderColor: isEnabled ? colors.color15 : colors.color10,
        opacity: enabled ? 1 : 0.6,
      }}
      color={colors.color1}
      onClick={toggleSwitch}
    >
      <CheckMark isEnabled={isEnabled} micro={micro} />
      {children}
    </RoundedBtn>
  );
}
