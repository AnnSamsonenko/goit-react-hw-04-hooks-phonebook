import { PageButton } from "./ButtonStyled";
import propTypes from "prop-types";
export const Button = ({ type, onClick, text }) => {
  return (
    <PageButton type={type} onClick={onClick}>
      {text}
    </PageButton>
  );
};

Button.propTypes = {
  type: propTypes.string.isRequired,
  onClick: propTypes.func,
  text: propTypes.string,
};
