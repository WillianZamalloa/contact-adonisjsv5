import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Contact from '../../Models/Contact';

export default class ContactsController {

    public async index({view, request}: HttpContextContract) {

        // const contacts = await Contact.all(); 
        // return view.render('contacts.index', { contacts })

        const page = request.input('page', 1)
        const limit = 10

        const contacts = await Contact.query().orderBy('id','desc').paginate(page, limit)

        // Changes the baseURL for the pagination links
        contacts.baseUrl('/contacts')

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


    public async edit({view, params}: HttpContextContract) {    

        const contact = await Contact.findOrFail(params.id)
        return view.render('contacts.edit',{ contact })        
    }

    public async update({view, session, params, request, response}: HttpContextContract) {    

        const contact = await Contact.findOrFail(params.id)

        contact.nombre = request.input('nombre')
        contact.telefono = request.input('telefono')

        await contact.save()

        session.flash({ mensaje: ` ${ contact.$isPersisted }: Contacto modificado!`})
        response.redirect().toRoute('contacts.index')
    }


    public async destroy({params, session, response}: HttpContextContract) {    

        const contact = await Contact.findOrFail(params.id)
        await contact.delete()
        // Listamos con el neuvo contacto
        session.flash({ mensaje: ` ${ contact.$isPersisted }: Contacto eliminado!`})
        response.redirect().back()
        
    }


}
