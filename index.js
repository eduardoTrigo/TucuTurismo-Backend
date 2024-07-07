const express = require('express')
const { default: mongoose } = require('mongoose')
const cors = require('cors')
const { MONGO_CONFIG, EXPRESS_CONFIG } = require('./config')

// Importar express-fileupload para manejar la carga de archivos
const fileUpload = require('express-fileupload')

// Importar los enrutadores de las rutas de la aplicación
const categoryRouter = require('./routes/category.router')
const restaurantRouter = require('./routes/restaurant.router')

const app = express()

// Usar express.json() para analizar los cuerpos de las solicitudes en formato JSON
app.use(express.json())

// Configurar cors para permitir todas las peticiones
app.use(cors());

// Usar express-fileupload para manejar la carga de archivos temporales
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: './uploads'
}))

app.use('/category', categoryRouter)
app.use('/restaurant', restaurantRouter)

mongoose.connect(MONGO_CONFIG.URI)
    .then(() => console.log('conectado'))
    .catch(() => console.log('No conectado'))

app.listen(EXPRESS_CONFIG.PORT || 3000, () => { console.log('servidor conectado ', EXPRESS_CONFIG.PORT) })
