import React, {useState, useEffect} from 'react';
import { NavContainer } from './BottomNavBar.style';
import BottomNavController from './BottomNavController';
import { Keyboard, SafeAreaView } from 'react-native';

const BottomNavBar = (props) => {
    const [isFocused, setIsFocused] = useState(false);

    const _keyboardDidShow = () => {
        setIsFocused(true);
    };

    const _keyboardDidHide = () => {
        setIsFocused(false);
    };

    useEffect(() => {
        Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
        Keyboard.addListener("keyboardDidHide", _keyboardDidHide);

        // cleanup function
        return () => {
            Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
            Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
        };
    }, []);

    const { children, style } = props;
    if(isFocused) return null;
    return (
        <SafeAreaView>
            <NavContainer style={style}>
                <BottomNavController {...props}>
                    {children}
                </BottomNavController>
            </NavContainer>
        </SafeAreaView>
    );
};


export default BottomNavBar;
