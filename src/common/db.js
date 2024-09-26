/*Se genera el cliente de conexión hacia el cluster de Mongodb*/

import { MongoClient, ServerApiVersion } from "mongodb"   

/*Creación de Constantes*/
/*Primera Constante= Contener el valor de la cadena de conexión*/
const uri = 'mongodb+srv://ev3_express:Ox3UavxXf8YDDVzz@cluster-express.ynzjs.mongodb.net/?retryWrites=true&w=majority&appName=cluster-express'

/*Segunda Constante= Cliente de conexión*/
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true
    }
})

export default client

