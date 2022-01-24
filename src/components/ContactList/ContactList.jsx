import { List } from './ContactListStyled';
import { ContactsItem } from 'components/ContactsItem/ContactsItem';
import propTypes from 'prop-types';
export const ContactList = ({ contacts, onDelete }) => {
  return (
    <List>
      {contacts.length > 0 &&
        contacts.map(({ name, number, id }) => (
          <ContactsItem key={id} name={name} id={id} number={number} onDelete={onDelete} />
        ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: propTypes.arrayOf(propTypes.object).isRequired,
  onDelete: propTypes.func.isRequired,
};
