import React, { useRef } from "react";
import LottieView from "lottie-react-native";
import success from "./success.json";
import { LoaderWrapper } from "./Success.style";

export default function Success({ style }) {
  const loadingRef = useRef();

  return (
    <LoaderWrapper>
      <LottieView
        ref={loadingRef}
        style={{
          height: 70,
          width: 70,
          ...style,
        }}
        autoPlay={true}
        loop={false}
        source={success}
      />
    </LoaderWrapper>
  );
}
