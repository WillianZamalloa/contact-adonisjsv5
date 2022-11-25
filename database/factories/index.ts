// import Factory from '@ioc:Adonis/Lucid/Factory'
import Contact from 'App/Models/Contact'
import Factory from '@ioc:Adonis/Lucid/Factory'

export const ContactFactory = Factory
                                .define(Contact, ( {faker} ) => {
                                  return {
                                    nombre: faker.name.fullName(),
                                    telefono: faker.phone.number(),
                                  }
                                })
                                .build()