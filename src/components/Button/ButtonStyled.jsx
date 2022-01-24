import styled from "styled-components";
import { font } from "../../helpers/mixins";

export const PageButton = styled.button`
  padding: ${(props) =>
    props.type === "button" ? props.theme.spacing(2) : props.theme.spacing(3)};
  min-width: ${(props) =>
    props.type === "button"
      ? props.theme.spacing(14)
      : props.theme.spacing(22)};
  border-radius: ${(props) => props.theme.spacing(4)};
  ${font({ fs: 16, fw: 600, lh: 20 })};
  background-color: ${(props) => props.theme.colors.buttonBg};
  text-shadow: 1px 1px 0 ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.buttonText};
  box-shadow: -5px -5px 20px ${(props) => props.theme.colors.white},
    5px 5px 20px ${(props) => props.theme.colors.colorShadow};
  transition: all 0.2s ease-in-out;
  &:hover {
    box-shadow: -2px -2px 5px ${(props) => props.theme.colors.white},
      2px 2px 5px ${(props) => props.theme.colors.colorShadow};
  }
  &:active {
    box-shadow: inset 1px 1px 2px ${(props) => props.theme.colors.white},
      inset -1px -1px 2px ${(props) => props.theme.colors.colorShadow};
  }
`;
