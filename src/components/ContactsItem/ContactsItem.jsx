import { Item } from "./ContactsItemStyled";
import { Button } from "components/Button/Button";
import propTypes from "prop-types";

export const ContactsItem = ({ id, name, number, onDelete }) => {
  return (
    <Item>
      <span>{name}:</span>
      <span>{number} </span>
      <Button type="button" onClick={() => onDelete(id)} text={"Delete"} />
    </Item>
  );
};

ContactsItem.propTypes = {
  name: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  number: propTypes.string.isRequired,
  onDelete: propTypes.func.isRequired,
};
