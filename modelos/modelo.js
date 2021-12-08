import mongoose from 'mongoose'

//definir el esquema de persona
const Schema = mongoose.Schema;

const PersonaSchema = new Schema({
    nombre: {
        type: String,
        required: "Ingrese nombre"
    },
    apellido: {
        type: String,
        required: "Ingrese apellido"
    },
    edad: {
        type:Number
    },
    animal: {
        type: String
    },
    cantante: {
        type: String
    },
    fecha_creacion: {
        type: Date,
        default: Date.now
    }

})

export default PersonaSchema