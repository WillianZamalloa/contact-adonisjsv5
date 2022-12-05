/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async ({ view }) => {
  return view.render('welcome')
})

// *********** Rutas *************
Route.get('/hola', async () => {
  return '<h1>Hola mundo!</h1>'
})

Route.get('/hola/:nombre', async ({ params }) => {
  return `<h1>Hola ${ params.nombre }!</h1>`
})

Route.get('/suma2/:nro1/:nro2', async ({ params }) => {
  const suma = Number(params.nro1) + Number(params.nro2)
  return `<h1>Suma= ${ suma }</h1>`
})

// Route.get('/posts/:id', async ({ params }) => {

//   return `Viewing post using id ${params.id}`

// }).where('id', /^[0-9]+$/)

Route.get('/posts/:slug', async ({ params }) => {

  return `Viewing post using slug ${params.slug}`

}).where('slug', /^[a-z_-]+$/)


Route.get('paginas', 'PaginasController.index')
Route.get('saludos/:nombre', 'PaginasController.saludo')
Route.get('salu2/:nombre', 'PaginasController.salu2')


Route.get('suma2control/:nro1/:nro2', 'PaginasController.suma2')

// Rutas a controladores y vistas

Route.get('bienvenidos', 'PaginasController.bienvenido')
Route.get('bienvenidos/:nombre', 'PaginasController.bienveni2')

Route.get('plantilla', 'PaginasController.template')


Route.get('contacts', 'ContactsController.index').as('contacts.index')
Route.get('/contacts/create', 'ContactsController.create').as('contacts.create')

// Route.get('paginas/:nombre', 'PaginasController.saludo')
// Rutas de contactos
// Route.get('/contacts', 'ContactController.index').as('contacts.index')
// Route.get('/contacts/create', 'ContactController.create').as('contacts.create')
// Route.post('/contacts', 'ContactController.store').as('contacts.store').validator(['StoreContact'])
// Route.get('/contacts/:id', 'ContactController.show').as('contacts.show')
// Route.get('/contacts/:id/edit', 'ContactController.edit').as('contacts.edit')
// Route.put('/contacts/:id', 'ContactController.update').as('contacts.update')
// Route.delete('/contacts/:id', 'ContactController.destroy').as('contacts.destroy')