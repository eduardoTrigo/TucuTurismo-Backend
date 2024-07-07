const { createCategory, getCategory } = require("../controllers/categorias.controllers")
const { updateRestaurant } = require("../controllers/restaurat.controllers")

const categoryRouter = require('express').Router()

categoryRouter.post('/', createCategory)
categoryRouter.get('/', getCategory)
categoryRouter.get('/:id', getCategory)
categoryRouter.delete('/:id', getCategory)
categoryRouter.patch('/:id',)

module.exports = categoryRouter