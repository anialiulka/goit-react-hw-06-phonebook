import css from './ContactElement.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContactInfo } from 'redux/contacts/slice';
import { selectFilteredContacts } from 'redux/contacts/selectors';

export const ContactElement = () => {
  const contacts = useSelector(selectFilteredContacts);

  const dispatch = useDispatch();

  const deleteContact = id => dispatch(deleteContactInfo(id));
  return contacts.map(contact => (
    <li className={css.listItem} key={contact.id}>
      {contact.name} : {contact.number}
      <button className={css.button} onClick={() => deleteContact(contact.id)}>
        Delete
      </button>
    </li>
  ));
};
