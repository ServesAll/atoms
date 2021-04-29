import React from 'react';
import AnimatedItem from './AnimatedItem';

const AnimatedPlaceholder = ({children, active}) => {
  if (active) {
    return <>{children[0]}</>;
  }
  return <AnimatedItem>{children}</AnimatedItem>;
};

export default AnimatedPlaceholder;
