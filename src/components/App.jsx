import { ContactForm } from './contact-form/ContactForm';
import { ContactList } from './contact-list/ContactList';
import { Filter } from './filter/Filter';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, deleteContact, setFilter } from '../redux/actions.js';

import style from './style.module.css';

export function App() {
  // const [contacts, setContacts] = useState([]);
  // const [filter, setFilter] = useState('');
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const dispatch = useDispatch();

  // console.log(contacts);

  const formSubmitHandler = data => {
    // setContacts([...contacts, data]);
    dispatch(addContact(data));
  };

  const changeFilterInput = value => {
    // setFilter(event);
    dispatch(setFilter(value));
  };

  // const handleDeleteContact = id => {
  //   // setContacts(contacts.filter(item => item.id !== id));
  //   console.log(contacts);

  //   dispatch(deleteContact(id));
  // };

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('localUserContacts'));
    if (storedTodos) {
      // setContacts(storedTodos);
    }
  }, []);

  useEffect(() => {
    if (contacts.length > 0) {
      localStorage.setItem('localUserContacts', JSON.stringify(contacts));
    }
  }, [contacts]);

  return (
    <div
      style={{
        height: '100vh',
        width: '400px',
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '150px',
        color: '#010101',
      }}
    >
      <div>
        <h1 className={style.title}>Phonebook</h1>
        <ContactForm
          formSubmitHandler={formSubmitHandler}
          contacts={contacts}
        />
        <Filter changeFilterInput={changeFilterInput} />
      </div>
      <h2 className={style.text}>Contacts</h2>
      <ContactList contacts={contacts} filter={filter} />
    </div>
  );
}
