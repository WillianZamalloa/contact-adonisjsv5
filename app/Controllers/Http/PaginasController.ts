import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PaginasController {

    public async index(ctx: HttpContextContract) {
        
        return "<h1>Hola desde PaginasController</h1>"
    }

    public async saludo(ctx: HttpContextContract) {
        
        return `<h1>Hola ${ ctx.params.nombre }, desde PaginasController :)</h1>`
    }

    public async salu2({ params }: HttpContextContract) {
        
        return `<h1>Hola ${ params.nombre }, desde PaginasController SALU2 :)</h1>`
    }

    public async suma2({ params }: HttpContextContract) {

        const suma = Number(params.nro1) + Number(params.nro2)
        return `<h1>La suma de ${ params.nro1 } + ${ params.nro2 } = ${ suma }</h1>`

    }

    public async bienvenido({ view }: HttpContextContract) {
        
        return view.render('bienvenidos')
    }

    public async bienveni2({ params, view }: HttpContextContract) {
        
        return view.render('bienvenidos', {params})
    }


    public async template({ view }: HttpContextContract) {
        
        return view.render('paginas.resultado', {
                                                    users: [
                                                        {
                                                            username: 'alejandra',
                                                            gender: 'm'
                                                        },
                                                        {
                                                            username: 'salvador',
                                                            gender: 'v'
                                                        },
                                                        {
                                                            username: 'patricia',
                                                            gender: 'm'
                                                        },
                                                    ]
                                                }
                          )
    }






















    // public async saludo({ params }: HttpContextContract) {
        
    //     return "Hola desde PaginasController, mi estimado: " + params.nombre
    // }

}
