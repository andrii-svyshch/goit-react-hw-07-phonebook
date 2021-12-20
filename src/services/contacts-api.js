import axios from 'axios';

axios.defaults.baseURL =
  'https://61bef9d1b25c3a00173f4c17.mockapi.io';

export async function fetchContacts() {
  const { data } = await axios.get(`/contacts`);

  return data;
}

export async function addContact(name, number) {
  const { data } = await axios.post(`/contacts`, {
    name,
    number,
  });
  return data;
}

export async function deleteContact(id) {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
}
