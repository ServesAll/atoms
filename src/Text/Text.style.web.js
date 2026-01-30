import styled from "styled-components";

export const H1 = styled.h1`
  font-size: ${(props) => props.theme.large};
  font-family: ${(props) => props.fontFamily || props.theme.fontFamily1};
  text-align: ${(props) => props.align};
  color: ${(props) =>
    props.color ||
    (props.secondary ? props.theme.secondaryText : props.theme.primaryText)};
  line-height: ${(props) => props.theme.lhLarge};
  ${(props) => props.style};
`;

export const H2 = styled.h2`
  font-size: ${(props) => props.theme.medium};
  font-family: ${(props) => props.fontFamily || props.theme.fontFamily1};
  text-align: ${(props) => props.align};
  color: ${(props) =>
    props.color ||
    (props.secondary ? props.theme.secondaryText : props.theme.primaryText)};
  line-height: ${(props) => props.theme.lhMedium};
  ${(props) => props.style};
`;

export const H3 = styled.h3`
  font-size: ${(props) => props.theme.small};
  font-family: ${(props) => props.fontFamily || props.theme.fontFamily1};
  text-align: ${(props) => props.align};
  color: ${(props) =>
    props.color ||
    (props.secondary ? props.theme.secondaryText : props.theme.primaryText)};
  line-height: ${(props) => props.theme.lhSmall};
  ${(props) => props.style};
`;

export const H4 = styled.h4`
  font-size: ${(props) => props.theme.xsmall};
  font-family: ${(props) => props.fontFamily || props.theme.fontFamily1};
  text-align: ${(props) => props.align};
  color: ${(props) =>
    props.color ||
    (props.secondary ? props.theme.secondaryText : props.theme.primaryText)};
  line-height: ${(props) => props.theme.small};
  ${(props) => props.style};
`;

export const H5 = styled.h5`
  font-size: ${(props) => props.theme.xssmall};
  font-family: ${(props) => props.fontFamily || props.theme.fontFamily1};
  text-align: ${(props) => props.align};
  color: ${(props) =>
    props.color ||
    (props.secondary ? props.theme.secondaryText : props.theme.primaryText)};
  line-height: ${(props) => props.theme.xssmall};
  ${(props) => props.style};
`;

export const Span = styled.span`
  font-size: ${(props) => props.theme.small};
  font-family: ${(props) => props.fontFamily || props.theme.fontFamily1};
  text-align: ${(props) => props.align};
  color: ${(props) =>
    props.color ||
    (props.secondary ? props.theme.secondaryText : props.theme.primaryText)};
  line-height: ${(props) => props.theme.lhSmall};
  ${(props) => props.style};
`;

export const P = styled.p`
  font-size: ${(props) => props.theme.small};
  font-family: ${(props) => props.fontFamily || props.theme.fontFamily1};
  text-align: ${(props) => props.align};
  color: ${(props) =>
    props.color ||
    (props.secondary ? props.theme.secondaryText : props.theme.primaryText)};
  line-height: ${(props) => props.theme.lhSmall};
  ${(props) => props.style};
`;
