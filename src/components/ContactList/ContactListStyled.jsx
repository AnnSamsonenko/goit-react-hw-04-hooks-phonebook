import styled from "styled-components";
import { font } from "../../helpers/mixins";

export const List = styled.ul`
  padding: ${(props) => props.theme.spacing(6)};
  max-width: ${(props) => props.theme.spacing(100)};
  border-radius: ${(props) => props.theme.spacing(4)};
  ${font({ fs: 16, fw: 600, lh: 20 })};
  text-shadow: 1px 1px 0 ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.buttonText};
`;
