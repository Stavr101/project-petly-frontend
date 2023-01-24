import { useDispatch, useSelector } from 'react-redux';
import {
  getFilteredContacts,
  selectAllContacts,
  selectFilter,
  selectLoading,
} from 'redux/contacts/selectors';
import {
  deleteContact,
  // patchContact
} from 'redux/contacts/operations';
import style from './ContactList.module.css';

export const ContactsList = () => {
  const items = useSelector(selectAllContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const contacts = useSelector(state => getFilteredContacts(items, filter));

  const onRemoveContact = id => {
    dispatch(deleteContact(id));
  };
  // const onRenameContact = id => {
  //   dispatch(patchContact(id));
  // };
  if (contacts) {
    const elements = contacts.map(({ name, id, number }) => {
      return (
        <li className={style.ContactList__item} key={id}>
          <span className={style.ContactList__text}>
            {name}: {number}
          </span>
          <button
            className={style.ContactList__button}
            type="button"
            onClick={() => onRemoveContact(id)}
            disabled={isLoading}
          >
            Delete
          </button>
          {/* <button
            className={style.ContactList__button}
            type="button"
            onClick={() => onRenameContact(id)}
            disabled={isLoading}
          >
            Rename
          </button> */}
        </li>
      );
    });

    return <ul className={style.ContactList__list}>{elements}</ul>;
  }
};
