import React, { useRef } from "react";
import LottieView from "lottie-react-native";
import error from "./error.json";
import { LoaderWrapper } from "./Error.style";

export default function Error({ style }) {
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
        source={error}
      />
    </LoaderWrapper>
  );
}
