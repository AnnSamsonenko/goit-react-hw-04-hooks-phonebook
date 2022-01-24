import { Component, useState, useEffect } from 'react';
import { GlobalStyle } from 'common/GlobalStyle';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Container, Title, SubTitle } from './AppStyled';

export const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  const [filter, setFilter] = useState('');
  const STORAGE_KEY = 'contacts';

  useEffect(() => {
    const storageContacts = localStorage.getItem(STORAGE_KEY);
    const parsedStorageContacts = JSON.parse(storageContacts);

    if (parsedStorageContacts) {
      setContacts([...parsedStorageContacts]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const onSubmitHandler = contactObj => {
    setContacts(prevState => {
      return [contactObj, ...prevState];
    });
  };

  const onChangeHandler = newFilter => {
    setFilter(newFilter);
  };

  const onDeleteHandler = id => {
    const filtredContacts = contacts.filter(contact => contact.id !== id);
    setContacts([...filtredContacts]);
  };

  const getFiltredContacts = () => {
    return filter
      ? contacts.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()))
      : contacts;
  };

  return (
    <Container>
      <GlobalStyle />

      <Title>Phonebook</Title>
      <ContactForm onSubmit={onSubmitHandler} contacts={contacts} />

      <SubTitle>Contacts</SubTitle>
      <Filter onChange={onChangeHandler} />
      <ContactList contacts={getFiltredContacts()} onDelete={onDeleteHandler} />
    </Container>
  );
};
