import { Input } from './components/Input';
import { Title } from './Title';
import { Contacts } from './components/Contacts';
import { Filter } from './components/FIlter';
import { ContactElement } from 'components/ContactElement/ContactElement';
import { addContactInfo, deleteContactInfo } from 'redux/contactsSlice';
import { nanoid } from '@reduxjs/toolkit';

import css from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';

export const App = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const dispatch = useDispatch();

  const addContact = data => {
    const nameRepeated = contacts.find(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );
    if (nameRepeated) {
      return alert(`${nameRepeated.name} is already in your contacts`);
    }
    const newContact = {
      ...data,
      id: nanoid(),
    };
    dispatch(addContactInfo(newContact));
  };

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const deleteContact = id => dispatch(deleteContactInfo(id));

  return (
    <div className={css.container}>
      <Title>Phonebook</Title>
      <Input addContact={addContact} />
      <Title>Contacts</Title>
      <Filter />
      <Contacts>
        <ContactElement
          contacts={getFilteredContacts()}
          deleteContact={deleteContact}
        />
      </Contacts>
    </div>
  );
};
