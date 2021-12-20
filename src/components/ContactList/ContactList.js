// import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import * as operations from '../../redux/operations';
import { getFilteredContacts } from 'redux/selector';
import s from './ContactList.module.css';

export default function ContactList() {
  const items = useSelector(getFilteredContacts);

  const dispatch = useDispatch();

  useEffect(() => dispatch(operations.fetchContacts()), [dispatch]);

  return (
    <>
      {items.length > 0 && (
        <ul>
          {items.map(({ name, number, id }) => (
            <li className={s.item} key={id}>
              <p>
                {name} : {number}
              </p>
              <button
                onClick={() => {
                  dispatch(operations.deleteContact(id));
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
