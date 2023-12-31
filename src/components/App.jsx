import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  onFilterChange = e => {
    this.setState({
      filter: e.currentTarget.value,
    });
  };

  searchName(obj) {
    return this.state.contacts.find(
      el => el.name.toLowerCase() === obj.name.toLowerCase()
    );
  }

  onSubmit = obj => {
    if (this.searchName(obj)) {
      return alert(`${obj.name} is already in contacts`);
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, { ...obj, id: nanoid() }],
    }));
  };

  handleDeleteContact = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(el => el.id !== id),
    }));
  };

  filteredContacts = () => {
    const { filter, contacts } = this.state;
    const normalized = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalized)
    );
  };

  render() {
    const visibleContacts = this.filteredContacts();

    return (
      <div
        style={{
          marginLeft: 50,
        }}
      >
        <h1>Phonebook</h1>

        <ContactForm onSubmit={this.onSubmit} />

        <h2>Contacts</h2>
        <Filter filter={this.state.filter} onChange={this.onFilterChange} />

        <ContactList
          contacts={visibleContacts}
          handleDeleteContact={this.handleDeleteContact}
        />
      </div>
    );
  }
}
