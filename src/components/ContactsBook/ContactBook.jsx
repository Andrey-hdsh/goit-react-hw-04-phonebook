import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from '../FormContact/FormContact';
import { Filter } from '../FilterContact/Filter';
import { ContactList } from '../ListContact/ListContact';

const localStorageKey = 'saved-contacts';
const savedContacts = localStorage.getItem(localStorageKey);

const getSavedContacts = () => {
  if (savedContacts) {
    return JSON.parse(savedContacts);
  }
  return [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];
};

export const SectionFormContacts = () => {
  const [contacts, setContacts] = useState(getSavedContacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(contacts));
  }, [contacts]);

  const handleNewContact = ({ name, number }) => {
    if (contacts.some(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    } else if (contacts.some(contact => contact.number === number)) {
      alert(`${number} is already in contacts`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const handleFilterContacts = value => {
    setFilter(value.currentTarget.value);
  };

  const handleDeleteContact = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  const textContactsFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(textContactsFilter);
  });

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm hundleContact={handleNewContact} contacts={contacts} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={handleFilterContacts} />
      <ContactList
        filteredData={filteredContacts}
        deletedData={handleDeleteContact}
      />
    </div>
  );
};
