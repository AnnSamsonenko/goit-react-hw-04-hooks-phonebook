import { Component } from 'react';
import { GlobalStyle } from 'common/GlobalStyle';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Container, Title, SubTitle } from './AppStyled';
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  storageKey = 'contacts';

  componentDidMount() {
    const storageContacts = localStorage.getItem(this.storageKey);
    const parsedStorageContacts = JSON.parse(storageContacts);

    if (parsedStorageContacts) {
      this.setState({ contacts: parsedStorageContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem(this.storageKey, JSON.stringify(this.state.contacts));
    }
  }

  onSubmitHandler = contactObj => {
    this.setState(({ contacts }) => {
      return { contacts: [contactObj, ...contacts], filter: '' };
    });
  };

  onChangeHandler = filter => {
    this.setState(prevState => {
      return { ...prevState, filter: filter };
    });
  };

  onDeleteHandler = id => {
    const filtredContacts = this.state.contacts.filter(contact => contact.id !== id);
    this.setState(prevState => {
      return { ...prevState, contacts: [...filtredContacts] };
    });
  };

  getFiltredContacts = () => {
    const { contacts, filter } = this.state;
    return filter
      ? contacts.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()))
      : contacts;
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <Container>
        <GlobalStyle />

        <Title>Phonebook</Title>
        <ContactForm onSubmit={this.onSubmitHandler} contacts={contacts} />

        <SubTitle>Contacts</SubTitle>
        <Filter onChange={this.onChangeHandler} />
        <ContactList contacts={this.getFiltredContacts()} onDelete={this.onDeleteHandler} />
      </Container>
    );
  }
}
