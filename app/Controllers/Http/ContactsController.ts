import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Contact from '../../Models/Contact';

export default class ContactsController {

    public async index({view}: HttpContextContract) {

        const contacts = await Contact.all(); 
        // return contacts;
        // console.log(contacts);
        
        return view.render('contacts.index', { contacts })

        
        
    }

    public async create({view}: HttpContextContract) {        
        return view.render('contacts.create')        
    }

    public async store({ request, session, response }: HttpContextContract) {   

        const contact = await Contact.create({
            nombre: request.input('nombre'),
            telefono: request.input('telefono'),
        })
        // Listamos con el neuvo contacto
        session.flash({ mensaje: ` ${ contact.$isPersisted }: Contacto agregado!`})
        response.redirect('contacts')
        
        // return request; request.all()
    }

    public async show({view, params}: HttpContextContract) {    

        const contact = await Contact.findOrFail(params.id)
        return view.render('contacts.show',{ contact })        
    }



    public async destroy({params, session, response}: HttpContextContract) {    

        const contact = await Contact.findOrFail(params.id)
        await contact.delete()
        // Listamos con el neuvo contacto
        session.flash({ mensaje: ` ${ contact.$isPersisted }: Contacto eliminado!`})
        response.redirect().back()
        
    }


}
