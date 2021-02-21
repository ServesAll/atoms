import styled from 'styled-components/native';

export const H1 = styled.Text`
    font-size: ${props => props.theme.large};
    font-family: ${props => props.theme.fontFamily1};
    text-align: ${props => props.align};
    color: ${props => props.color || props.theme.color6};
    height: auto;
    ${props => props.style};
`;

export const H2 = styled.Text`
    font-size: ${props => props.theme.medium};
    font-family: ${props => props.theme.fontFamily1};
    text-align: ${props => props.align};
    color: ${props => props.color || props.theme.color6};
    height: auto;
    ${props => props.style};
`;

export const H3 = styled.Text`
    font-size: ${props => props.theme.small};
    font-family: ${props => props.theme.fontFamily1};
    text-align: ${props => props.align};
    color: ${props => props.color || props.theme.color6};
    height: ${props => props.theme.small};
    line-height: ${props => props.theme.small};
    height: auto;
    ${props => props.style};
`;

export const H4 = styled.Text`
    font-size: ${props => props.theme.xsmall};
    font-family: ${props => props.theme.fontFamily1};
    text-align: ${props => props.align};
    color: ${props => props.color || props.theme.color6};
    height: ${props => props.theme.small};
    lineHeight: ${props => props.theme.small};
    height: auto;
    ${props => props.style};
`;

export const Span = styled.Text`
   font-size: ${props => props.theme.small};
   font-family: ${props => props.theme.fontFamily2};
   text-align: ${props => props.align};
   color: ${props => props.color || props.theme.color6};
   height: auto;
    ${props => props.style};
`;

export const P = styled.Text`
    font-size: ${props => props.theme.small};
    font-family: ${props => props.theme.fontFamily2};
    text-align: ${props => props.align};
    color: ${props => props.color || props.theme.color6};
    height: auto;
    ${props => props.style};
`;
