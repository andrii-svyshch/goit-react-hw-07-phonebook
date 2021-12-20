import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('contacts.Add', (name, number) => {
  return { payload: { name, number, id: uuidv4() } };
});
export const deleteContact = createAction('contacts/Delete');
export const filterContact = createAction('contacts/Filter');

export const fetchContactsRequest = createAction('contacts/FetchRequest');
export const fetchContactsSuccess = createAction('contacts/FetchSuccess');
export const fetchContactsError = createAction('contacts/FetchError');

export const addContactRequest = createAction('contacts/AddRequest');
export const addContactSuccess = createAction('contacts/AddSuccess');
export const addContactError = createAction('contacts/AddError');

export const deleteContactRequest = createAction('contacts/DeleteRequest');
export const deleteContactSuccess = createAction('contacts/DeleteSuccess');
export const deleteContactError = createAction('contacts/DeleteError');
