import { ObjectId } from 'mongodb'
import client from '../common/db.js'
import { Actor } from './actor.js'


const actorCollection = client.db('cine').collection('actores')


/*Método 1 handleInsertActorRequest*/
async function handleInsertActorRequest(req, res){
    let data = req.body
    let actor = Actor

    
    actor.idPelicula = data.idPelicula
    actor.nombre = data.nombre
    actor.edad = data.edad
    actor.estaRetirado = data.estaRetirado
    actor.premios = data.premios
   
    
    await actorCollection.insertOne(actor)
    .then((data) => {
        if(data === null) return res.status(400).send('Error al guardar registro')

        return res.status(201).send(data)
    
    })
    .catch((e) => { return res.status(500).send({ error: e }) })

}

/*Método 2 handleGetActoresRequest*/
async function handleGetActoresRequest(req, res){
    await actorCollection.find({}).toArray()
    .then((data) => { return res.status(200).send(data) })        
    .catch((e) => { return res.status(500).send({ error: e }) })
}

/* Método 3 handleGetActorByIdRequest*/
async function handleGetActorByIdRequest(req, res){
    let id = req.params.id

    try{
        let oid = ObjectId.createFromHexString(id)
        
        await actorCollection.findOne({ _id: oid })
        .then((data) => {
            if(data === null) return res.status(404).send(data)

            return res.status(200).send(data)
        })
        .catch((e) => {
            return res.status(500).send({ error: e.code })
        })

        
    }catch(e){
        return res.status(400).send('Id mal formado')
    }


}

/*Método 4 handleGetActoresByPeliculaIdRequest*/
async function handleGetActoresByPeliculaIdRequest(req, res){
    let idPelicula = req.params.idPelicula

    try{
        let oid = ObjectId.createFromHexString(id)
        
        await actorCollection.findOne({_idPelicula: oid})
        .then((data) => {
            if(data === null) return res.status(404).send(data)

            return res.status(200).send(data)
        })
        .catch((e) => {
            return res.status(500).send({ error: e.code })
        })

        
    }catch(e){
        return res.status(400).send('Id mal formado')
    }


}

export default {
    handleInsertActorRequest,
    handleGetActoresRequest,
    handleGetActorByIdRequest,
    handleGetActoresByPeliculaIdRequest
    
}

