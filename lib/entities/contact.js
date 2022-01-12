import { Entity, Schema, Repository } from "redis-om";
import { connect, client } from "../redis";
class Contact extends Entity {}
export const contactSchema = new Schema(
    Contact,
    {
        first: { type: "string", textSearch: true },
        last: { type: "string", textSearch: true },
        email: { type: "string" },
        phone: { type: "string", textSearch: true },
        importance: { type: "string", textSearch: true },
    },
    { dataStructure: "JSON" }
);

export const createContact = async (data) => {
    await connect();

    const repo = new Repository(contactSchema, client);

    const contact = repo.createEntity(data);

    const id = await repo.save(contact);
    return id;
}

export const allContacts = async () => {
    await connect();
    const repo = new Repository(contactSchema, client);

    const contacts = await repo.search().return.all();
    console.log("contacts", contacts)

    return contacts;
}
