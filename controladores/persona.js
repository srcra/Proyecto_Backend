import mongoose from 'mongoose'
import PersonaSchema from '../modelos/modelo.js'

// crea objeto persona basado en el schema
const Persona = mongoose.model('Persona', PersonaSchema)

//crear accion para registrar nueva persona
export const addPersona = (request, response) => {
    //creando nueva persona
    let p = new Persona(request.body)
    p.save((error, p) => {
        if (error) {
            response.send(error)
        } else {
            response.json(p)
        }
    })
}

//accion para obtener el listado de personas
export const getPersonas = (request, response) => {
    Persona.find({}, (error, personas) => {
        if (error) {
            responde.send(error)
        } else {
            response.json(personas)
        }
    })
}

//accion para obtener una persona por su id
export const getPersonabyId = (request, response) => {

    Persona.findById(request.params.personaid, (error, persona) => {
        if (error) {
            response.send(error)
        } else {
            response.json(persona)
        }
    })
}

//actualiza person por id
export const updatePersona = (request, response) => {
    Persona.findOneAndUpdate({ _id: request.params.personaid },
        request.body, {
            new: true
        },
        (error, persona) => {
            if (error) {
                response.send(error)
            } else {
                response.json(persona)
            }
        })
}

export const deletePersona = (request, response) => {
    Persona.remove({ _id: request.params.personaid }, (error, persona) => {
        if (error) {
            response.send(error)
        } else {
            response.json({ mensaje: "borrado exitoso" })
        }
    })
}