import styled from "styled-components";
import { centerBlock, font } from "../helpers/mixins";
export const Container = styled.div`
  padding: 40px 16px;
  width: 1004px;
  ${centerBlock};
`;

export const Title = styled.h1`
  font-family: ${(props) => props.theme.fonts.secondary};
  ${font({ fs: 28, fw: 600, lh: 32 })};
  margin-bottom: ${(props) => props.theme.spacing(3)};
  color: ${(props) => props.theme.colors.secondaryText};
  text-shadow: 1px 1px 1px ${(props) => props.theme.colors.white};
`;

export const SubTitle = styled.h2`
  font-family: ${(props) => props.theme.fonts.secondary};
  ${font({ fs: 24, fw: 600, lh: 28 })};
  margin-bottom: ${(props) => props.theme.spacing(3)};
  margin-top: ${(props) => props.theme.spacing(4)};
  color: ${(props) => props.theme.colors.secondaryText};
  text-shadow: 1px 1px 1px ${(props) => props.theme.colors.white};
`;
