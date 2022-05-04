const fs = require("fs").promises;

const contactsPath = "./db/contacts.json";

async function listContacts() {
  try {
    const contacts = await fs.readFile(contactsPath);
    return JSON.parse(contacts);
  } catch (err) {
    console.log(err);
  }
}

async function getContactById(contactId) {
  try {
    const contacts = await fs.readFile(contactsPath);
    const parsedContacts = JSON.parse(contacts);
    return parsedContacts.filter((contact) => Number(contact.id) === contactId);
  } catch (err) {
    console.log(err);
  }
}

async function addContact(name, email, phone) {
  try {
    const contacts = await fs.readFile(contactsPath);
    const parsedContacts = JSON.parse(contacts);
    const newContacts = [
      ...parsedContacts,
      {
        id: String(parsedContacts.length + 1),
        name: name,
        email: email,
        phone: phone,
      },
    ];
    await fs.writeFile(contactsPath, JSON.stringify(newContacts));
  } catch (err) {
    console.log(err);
  }
}

async function removeContact(contactId) {
  try {
    const contacts = await fs.readFile(contactsPath);
    const parsedContacts = JSON.parse(contacts);
    const newContacts = parsedContacts.filter(
      (contact) => Number(contact.id) !== contactId
    );
    await fs.writeFile(contactsPath, JSON.stringify(newContacts));
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  listContacts,
  getContactById,
  addContact,
  removeContact,
};
