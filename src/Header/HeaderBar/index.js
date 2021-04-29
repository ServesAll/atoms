import React from 'react';
import { Platform, SafeAreaView } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { HeaderWrapper, HeaderContainer } from './HeaderBar.style';
import { StatusBarComponent } from '../StatusBar';

const Header = ({ StatusBarOptions = {}, children, style, height }) => {
    return (
        <HeaderWrapper height={height + (Platform.OS === 'ios' ? getStatusBarHeight() : 0)} style={style}>
            <StatusBarComponent options={StatusBarOptions} />
            <SafeAreaView style={{ flex: 1 }}>
                <HeaderContainer>
                    {children}
                </HeaderContainer>
            </SafeAreaView>
        </HeaderWrapper>
    );
};

export default Header;
