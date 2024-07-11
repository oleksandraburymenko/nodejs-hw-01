import { PATH_DB } from '../constants/contacts.js';
import fs from "fs/promises";
import { getAllContacts } from './getAllContacts.js';

const removeLastContact = async () => {
    try {
        
        const contacts = await getAllContacts();
        
        if (contacts.length > 0) {
            
            contacts.pop();
            
            await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
            console.log('Last contact removed successfully.');
        } else {
            console.log('No contacts to remove.');
        }
    } catch (error) {
        console.error('Something went wrong', error);
    }
};

await removeLastContact();