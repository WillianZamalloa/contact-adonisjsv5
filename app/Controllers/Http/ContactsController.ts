import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Contact from '../../Models/Contact';

export default class ContactsController {

    public async index({view}: HttpContextContract) {

        const contacts = await Contact.all(); 
        // return contacts;
        // console.log(contacts);
        
        return view.render('contacts.index', { contacts })
        
    }
}
