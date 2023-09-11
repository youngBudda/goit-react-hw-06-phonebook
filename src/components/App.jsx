import Filter from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteContact, setFilter } from '../redux/Slice';
import Form from './Form/Form';
import ContactList from './ContactList/ContactList';

export function App() {
  // const [contacts, setContacts] = useState(
  //   () => JSON.parse(localStorage.getItem('contacts')) || []
  // );
  const contacts = useSelector(state => state.contacts);
  // const [filter, setFilter] = useState('');
  const filter = useSelector(state => state.filter);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  const onDeleteContact = id => {
    // setContacts(prevState => prevState.filter(contact => contact.id !== id));
    dispatch(deleteContact(id));
  };

  const onAddContact = contactData => {
    const checkedContact = contacts.find(
      contact => contactData.name.toLowerCase() === contact.name.toLowerCase()
    );
    if (checkedContact) {
      alert(`${contactData.name} is already in contacts}`);
      return;
    }
    dispatch(addContact(contactData));

    // const contact = { id: nanoid(), ...contactData };
    // setContacts(prevState => [contact, ...prevState]);
  };

  const onFilter = filterData => {
    dispatch(setFilter(filterData));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase().trim())
  );

  return (
    <>
      <h1>
        <span>☎︎ </span>Phonebook
      </h1>
      <Form onAddContact={onAddContact} />
      <h2 style={{ display: 'flex', justifyContent: 'center' }}>Contacts</h2>
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={onDeleteContact}
      />
      <Filter onFilter={onFilter} filter={filter} />
    </>
  );
}
