import { PATH_DB } from '../constants/contacts.js';
import fs from "fs/promises";
import { createFakeContact } from "../utils/createFakeContact.js";
const generateContacts = async (number) => {
    const contacts = [];
    for (let i = 0; i <= number; i++){
        contacts.push(createFakeContact());
    }
    try {
        const data = await fs.readFile(PATH_DB, "utf-8");
        const storageContacts = JSON.parse(data);
        const generateContacts = [...storageContacts, ...contacts];
        await fs.writeFile(PATH_DB, JSON.stringify(generateContacts));
        } catch (error) {
        console.error("somthing went wrong", error);
    }
};

await generateContacts(1);
