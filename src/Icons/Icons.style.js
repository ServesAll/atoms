import styled from 'styled-components/native';

export const IconWrapper = styled.View`
    align-items: center;
    justify-content: center;
    height: ${props => props.theme[props.size]};
    width: ${props => props.theme[props.size]};
    ${props => props.style};
`;
