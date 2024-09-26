import express from 'express'
import peliculacontroller from './peliculacontroller.js'

const pelicularoutes = express.Router()

pelicularoutes.post('/', peliculacontroller.handleInsertPeliculaRequest)
pelicularoutes.get('/', peliculacontroller.handleGetPeliculasRequest)
pelicularoutes.get('/:id', peliculacontroller.handleGetPeliculaRequest)
pelicularoutes.put('/:id', peliculacontroller.handleUpdatePeliculaRequest)
pelicularoutes.delete('/:id', peliculacontroller.handleDeletePeliculaRequest)



export default pelicularoutes