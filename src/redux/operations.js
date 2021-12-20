import * as actions from './actions';
import * as contactsAPI from '../services/contacts-api';

export const fetchContacts = () => async dispatch => {
  dispatch(actions.fetchContactsRequest());
  try {
    const contacts = await contactsAPI.fetchContacts();
    dispatch(actions.fetchContactsSuccess(contacts));
  } catch (error) {
    dispatch(actions.fetchContactsError(error.message));
  }
};

export const addContact = (name, number) => async dispatch => {
  dispatch(actions.addContactRequest());
  try {
    const contacts = await contactsAPI.addContact(name, number);
    dispatch(actions.addContactSuccess(contacts));
    dispatch(actions.addContact(name, number));
  } catch (error) {
    dispatch(actions.addContactError(error.message));
  }
};

export const deleteContact = id => async dispatch => {
  dispatch(actions.deleteContactRequest());
  try {
    const contacts = await contactsAPI.deleteContact(id);
    dispatch(actions.deleteContactSuccess(contacts));
    dispatch(actions.deleteContact(id));
  } catch (error) {
    dispatch(actions.deleteContactError(error.message));
  }
};
