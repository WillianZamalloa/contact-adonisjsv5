import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Contact from '../../Models/Contact';

export default class ContactsController {

    public async index(ctx: HttpContextContract) {

        const contacts = Contact.all(); 
        return contacts;
        
    }
}
