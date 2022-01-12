import { Client, Repository } from "redis-om";
import { contactSchema } from "./entities/contact";

export const client = new Client();

export const connect = async () => {
    if (!client.isOpen()) {
        await client.open(process.env.REDIS_URL);
    }
};

export const createIndex = async () => {
    await connect();
    const repo = new Repository(contactSchema, client);
    await repo.dropIndex();
    await repo.createIndex();
};

export const searchContacts = async (q) => {
    await connect();
    console.log(q)
    const repo = new Repository(contactSchema, client);
    // let contacts = await repo.search().where('first').matches(q).return.all();
    let contacts = await repo.search().where('first').matches(q).or('last').matches(q).or('phone').matches(q).or('importance').matches(q).return.all();
    return contacts;
};
