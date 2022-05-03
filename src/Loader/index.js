import React, { useRef } from "react";
import LottieView from "lottie-react-native";
import loader from "./loader.json";
import { LoaderWrapper } from "./Loading.style";

export default function Loader({ color, style }) {
  const loadingRef = useRef();

  return (
    <LoaderWrapper>
      <LottieView
        ref={loadingRef}
        style={{
          height: 100,
          width: 100,
          ...style,
        }}
        autoPlay={true}
        loop={true}
        colorFilters={[
          {
            keypath: "LOADER",
            color: color,
          },
        ]}
        source={loader}
      />
    </LoaderWrapper>
  );
}
