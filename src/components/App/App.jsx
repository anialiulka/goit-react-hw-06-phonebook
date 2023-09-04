import { Input } from '../Input';
import { Title } from '../Title';
import { Contacts } from '../Contacts';
import { Filter } from '../FIlter';
import { ContactElement } from 'components/ContactElement/ContactElement';
import css from './App.module.css';

export const App = () => {
  return (
    <div className={css.container}>
      <Title>Phonebook</Title>
      <Input />
      <Title>Contacts</Title>
      <Filter />
      <Contacts>
        <ContactElement />
      </Contacts>
    </div>
  );
};
