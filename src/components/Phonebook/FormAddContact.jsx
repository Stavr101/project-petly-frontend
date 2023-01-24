import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectAllContacts, selectLoading } from 'redux/contacts/selectors';
import Loader from 'shared/loader/Loader';
import style from './FormContact.module.css';

export const FormAddContact = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectAllContacts);
  const isLoading = useSelector(selectLoading);

  const handleAddContacts = async event => {
    event.preventDefault();
    const form = event.currentTarget;

    const { name, number } = form;
    const contact = {
      name: name.value,
      number: number.value,
    };

    items.find(
      item => item.name === contact.name || item.phone === contact.number
    )
      ? alert(`${contact.name} - ${contact.number} is already in contacts.`)
      : dispatch(addContact(contact));

    event.currentTarget.reset();
  };

  return (
    <form className={style.FormInput} onSubmit={handleAddContacts}>
      <label htmlFor="name">
        Name
        <input
          className={style.FormInput__input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label htmlFor="phone">
        Number
        <input
          className={style.FormInput__input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={style.FormButton} type="submit" disabled={isLoading}>
        {isLoading && <Loader />}
        Add contact
      </button>
    </form>
  );
};
