import React from 'react';
import { NavItemContainer } from './BottomNavBar.style';

const BottomNavItem = ({ TabElements, isFocused }) => {
    return (
        <NavItemContainer isFocused={isFocused}>
            <TabElements isFocused={isFocused} />
        </NavItemContainer>
    );
};


export default BottomNavItem;
