const express = require('express');
const { default: mongoose } = require('mongoose');
const categoryRouter = require('./routes/category.router');


const app = express()

app.use(express.json())

app.use('/category', categoryRouter)

mongoose.connect('mongodb+srv://TucuTurismo:TucuTurismo@cluster0.nrsbtqm.mongodb.net/TucuTurismo?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => console.log('conectado'))
    .catch(() => console.log('No conectado'))

app.listen(3000, () => { console.log('servidor conectado ', 3000) })
