import React from "react";
import { Wrapper, ErrorWrapper } from "./ErrorText.style";
import LottieView from "lottie-react-native";
import error from "./error.json";

const ErrorText = ({ children }) => {
  return (
    <Wrapper>
      <ErrorWrapper>
        <LottieView
          style={{
            height: 30,
            width: 30,
          }}
          autoPlay={true}
          loop={false}
          source={error}
        />
      </ErrorWrapper>
      {children}
    </Wrapper>
  );
};

export default ErrorText;
