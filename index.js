import express from 'express'
import rutas from './rutas/rutas.js'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

//crear objeto application
const app = express()
const PUERTO = 5000

//conexion a mongo
mongoose.Promise = global.Promise
mongoose.connect("mongodb://localhost/evidencia", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//configuracion de body-parser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//utiliza rutas definidas en rutas.js
rutas(app)

//crear servidor de aplicacion
app.listen(PUERTO, () => {
    console.log(`servidor ejecutado en puerto:${PUERTO}`)
})