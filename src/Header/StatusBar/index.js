import React from 'react';
import { StatusBar, View, Platform } from 'react-native';
import { DEFAULT_PROPS_STATUS_BAR } from './defaults';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export const StatusBarComponent = ({ options }) => {

    const STATUS_BAR_HEIGHT = getStatusBarHeight();

    const {
        hidden = DEFAULT_PROPS_STATUS_BAR.hidden,
        barStyle = DEFAULT_PROPS_STATUS_BAR.barStyle,
        backgroundColor = DEFAULT_PROPS_STATUS_BAR.backgroundColor,
        translucent = DEFAULT_PROPS_STATUS_BAR.translucent,
    } = options;

    return Platform.OS === 'ios' ? (
        <View style={{
            width: "100%",
            height: STATUS_BAR_HEIGHT,
            backgroundColor: backgroundColor
        }}>
        <StatusBar
            translucent={translucent}
            backgroundColor={backgroundColor}
            barStyle={barStyle}
            hidden={hidden}
            animated={true}
        />
        </View>
    ) : (
        <StatusBar
            translucent={translucent}
            backgroundColor={backgroundColor}
            barStyle={barStyle}
            hidden={hidden}
            animated={true}
        />
    );
};
