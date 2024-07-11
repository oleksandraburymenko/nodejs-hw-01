import { PATH_DB } from '../constants/contacts.js';
import fs from "fs/promises";
export const countContacts = async () => {
    try {
        const data = await fs.readFile(PATH_DB, "utf-8");
        const storageContacts = JSON.parse(data);
        if(storageContacts.length>0){
            return storageContacts.length;
        }
    } catch (error) {
        console.error("sothing went wrong", error);
    }
};

console.log( await countContacts());
