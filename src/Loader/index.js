import React, {useRef} from 'react';
import LottieView from 'lottie-react-native';
import loader from './loader.json';
import {LoaderWrapper} from './Loading.style';
import changeSVGColor from '@killerwink/lottie-react-native-color';

export default function Loader({color, style}) {
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
        source={changeSVGColor(loader, color)}
      />
    </LoaderWrapper>
  );
};

