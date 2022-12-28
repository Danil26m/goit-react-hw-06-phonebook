import { useState } from 'react';
import { useDispatch} from 'react-redux';
import { addContacts } from 'redux/contacts';
import { nanoid } from 'nanoid';
export default function Form() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const handelInput = even => {
    const { name, value } = even.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };  

  const handelClick =()=>{
    setName('');
    setNumber('');
}
  return (
    <div>
      <form id='form' action="" onSubmit={(even)=>{
        even.preventDefault();
        handelClick();
        return dispatch(addContacts({name,number,id: nanoid()}))}}>
        <h2>Name</h2>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handelInput}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <h2>Number</h2>
        <input
          type="tel"
          name="number"
          value={number}
          onChange={handelInput}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <br />
        <button type="submit">Add contacts</button>
      </form>
    </div>
  );
}
