//funcion para gestionar las rutas del proyecto
//necesitara el objeto express para crear las rutas endpoints
//end point: ruta REST que expone colecciones/singleton/resultadosoperaciones pero en formato json 
import {
    addPersona,
    getPersonas,
    getPersonabyId,
    updatePersona,
    deletePersona
} from "../controladores/persona.js"

const rutas = (app) => {
    app.route('/personas')
        .get(getPersonas) //function(rest, response) { response.send("listado de personas") }
        .post(addPersona)
    app.route('/personas/:personaid')
        .get(getPersonabyId)
        .put(updatePersona)
        .delete(deletePersona)
}

export default rutas