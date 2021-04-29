import React, { useRef } from 'react';
import LottieView from "lottie-react-native";
import allCategories from './Assets';
import {IconWrapper} from './Icons.style';

const Icon = ({ icon, size = "small", autoplay, loop, color = '#5E5E5E', style }) => {

    const iconRef = useRef();

    return (
        <IconWrapper size={size}>
        <LottieView
            ref={iconRef}
            style={{
                width: '100%',
                height: '100%',
                ...style,
            }}
            autoPlay={autoplay}
            loop={loop}
            source={allCategories[icon]}
            colorFilters={[
                {
                    keypath: icon,
                    color: color,
                },
            ]}
        />
        </IconWrapper>
    );
};

export default Icon;
