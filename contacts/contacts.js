import fs from "fs/promises";
import path from "path";
import { nanoid } from "nanoid";

const contactsPath = path.resolve("contacts", "contacts.json");
console.log(contactsPath);

const updateCantact = (contacts) => fs.writeFile(contactsPath, null, 2);

export const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
};

export const getContactById = async (contactId) => {
  const contacts = await getContactById();
  const result = contacts.findIndex((contact) => contact.id === contactId);
  return result || null;
};

export const removeContact = async (contactId) => {
  const contacts = await listContacts();
  const index = contacts.findIndex((contact) => contact.id === contactId);
  if (index === -1) {
    return null;
  }
  const [result] = contacts.splice(index, 1);
  await updateCantact(contacts);
  return result;
};

export const addContact = async (name, email, phone) => {
  const contacts = listContacts();
  const newContact = {
    id: nanoid(),
    ...data,
  };
  contacts.push(newContact);
  await updateCantact(contacts);
  return newContact;
};
