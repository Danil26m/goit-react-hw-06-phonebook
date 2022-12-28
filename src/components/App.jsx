import Form from './Form/Form';
import Contacts from './Contacts/Contacts';
import { useSelector } from 'react-redux';
export default function App() {
  const contacts = useSelector(state=>state.contacts);
  const filter = useSelector(state=>state.filter);
  console.log(contacts);
  const filtered = () => {
    if (filter) {
      return contacts.filter(m =>
        m.name.toLowerCase().includes(filter.toLocaleLowerCase())
      );
    }
    return contacts;
  };
  // useEffect(() => {
  //   const locale = JSON.parse(localStorage.getItem('contacts'));
  //   if (locale) {
  //     setContacts(locale);
  //   }
  // }, []);
  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);
  // const nameContact = data => {
  //   const { name, number } = data;
  //   const bulElement = contacts.find(con => con.name === name);
  //   if (bulElement) {
  //     alert(`${name} is already contact`);
  //   } else {
  //     setContacts(prevState => [...prevState,{ id: contacts.length, name, number },]);
  //   }
  // };
  const f = filtered();
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <Form/>

      <h2>Contacts</h2>
      {contacts?.length ?
        <Contacts cont={f}/>:''
      }
    </div>
  );
}
