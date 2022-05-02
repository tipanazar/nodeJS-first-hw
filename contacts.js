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
// listContacts();

async function getContactById(contactId) {
  try {
    const contacts = await fs.readFile(contactsPath);
    const parsedContacts = JSON.parse(contacts);
    return parsedContacts.filter((contact) => contact.id === contactId);
  } catch (err) {
    console.log(err);
  }
}
// getContactById("1");

async function removeContact(contactId) {
  try {
    const contacts = await fs.readFile(contactsPath);
    const parsedContacts = JSON.parse(contacts);
    const newContacts = parsedContacts.filter(
      (contact) => contact.id !== contactId
    );
    console.log(newContacts);
    await fs.writeFile(contactsPath, JSON.stringify(newContacts));
  } catch (err) {
    console.log(err);
  }
}
// removeContact("10");

async function addContact(name, email, phone) {
  try {
    const contacts = await fs.readFile(contactsPath);
    const parsedContacts = JSON.parse(contacts);  
    const newContacts = [...parsedContacts, {
      id: parsedContacts.length + 1,
      name: name,
      email: email,
      phone: phone,
    }];
    await fs.writeFile(contactsPath, JSON.stringify(newContacts));
  } catch (err) {
    console.log(err);
  }
}
// addContact("nazar", "karp@gmail", "12312");
