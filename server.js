import express, { urlencoded} from 'express'
import cors from 'cors'

import client from './src/common/db.js'
import pelicularoutes from './src/pelicula/pelicularoutes.js'
import actorroutes from './src/actor/actorroutes.js'

/*Generar Constantes*/

const app = express()

const PORTS = 3000 || 3001


/*Configurar los Middlewares*/
app.use(express.json())
app.use(urlencoded({ extended: true }))
app.use(cors())

/*Crear ruta por defecto*/
app.all('/', (req, res) => {
    let message = 'Bienvenido al cine Iplacex'
    return res.status(200).send(message)
})

/*Rutas con prefijo API*/

app.use('/api/', pelicularoutes)
app.use('/api/', actorroutes)

await client.connect()
.then(() => {
    console.log('Conectado al clúster')
    app.listen(PORTS, () => { console.log(`Servidor corriendo en http://localhost:${PORTS}`) })
})
.catch(() => {
    console.log('Ha ocurrido un error al conectar al clúster de Atlas')
})






