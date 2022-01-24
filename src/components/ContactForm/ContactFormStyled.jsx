import { Form, Field } from "formik";
import styled from "styled-components";
import { font } from "../../helpers/mixins";
export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: ${(props) => props.theme.spacing(60)};
  height: ${(props) => props.theme.spacing(82)};
  padding: 20px;
  border-radius: ${(props) => props.theme.spacing(4)};
  background-color: ${(props) => props.theme.colors.white};
`;

export const Input = styled(Field)`
  border: 0;
  outline: 0;
  margin-bottom: ${(props) => props.theme.spacing(4)};
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

export const Message = styled.p`
  ${font({ fs: 12, fw: 500, lh: 16 })};
  color: ${(props) => props.theme.colors.red};
  text-shadow: 1px 1px 0 ${(props) => props.theme.colors.white};
`;
export const LabelStyled = styled.label`
  ${font({ fs: 16, fw: 400, lh: 20 })};
  text-shadow: 1px 1px 0 ${(props) => props.theme.colors.white};
`;
