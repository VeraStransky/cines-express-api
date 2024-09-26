import express from 'express'
import actorcontroller from './actorcontroller.js'

const actorroutes = express.Router()

actorroutes.post('/actor', actorcontroller.handleInsertActorRequest)
actorroutes.get('/actores', actorcontroller.handleGetActoresRequest)
actorroutes.get('/actor/:id', actorcontroller.handleGetActorByIdRequest)
actorroutes.get('/actor/pelicula/:pelicula', actorcontroller.handleGetActoresByPeliculaIdRequest)


export default actorroutes