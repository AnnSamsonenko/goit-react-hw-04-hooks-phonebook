import styled from "styled-components";
import { font } from "../../helpers/mixins";

export const SearchInput = styled.input`
  border: 0;
  outline: 0;
  border-radius: ${(props) => props.theme.spacing(4)};
  padding: ${(props) => props.theme.spacing(3)};
  background-color: ${(props) => props.theme.colors.buttonBg};
  text-shadow: 1px 1px 0 ${(props) => props.theme.colors.white};
  ${font({ fs: 16, fw: 400, lh: 20 })};
  box-shadow: inset 2px 2px 5px ${(props) => props.theme.colors.colorShadow},
    inset -5px -5px 10px ${(props) => props.theme.colors.white};
  transition: all 0.2s ease-in-out;
  appearance: none;

  &:focus {
    box-shadow: inset 1px 1px 2px var(--color-shadow),
      inset -1px -1px 2px var(--color-white);
  }
`;

export const FilterWrapper = styled.div`
  padding: 20px;
  width: ${(props) => props.theme.spacing(60)};
`;
