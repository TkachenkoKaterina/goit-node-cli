import { program } from "commander";

import {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} from "./contacts/contacts.js";

const invokeAction = async ({ action, id, ...data }) => {
  switch (action) {
    case "list":
      const allContacts = await listContacts();
      return console.log(allContacts);
    case "get":
      const contactById = await getContactById(id);
      return console.log(contactById);
    case "add":
      const newContact = await addContact(data);
      return console.log(newContact);
    case "remove":
      const removedContact = await removeContact(id);
      return console.log(removedContact);
    default:
      console.log("Unknown action");
  }
};

program
  .option("-a, --action <type>")
  .option("-i, --id <type>")
  .option("-n, --name <type>")
  .option("-e, --email <type>")
  .option("-p, --phone <type>");

program.parse();

const options = program.opts();
invokeAction(options);
