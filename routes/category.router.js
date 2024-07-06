const { createCategory, getCategory } = require("../controllers/categorias.controllers")

const categoryRouter = require('express').Router()

categoryRouter.post('/', createCategory)
categoryRouter.get('/', getCategory)

module.exports = categoryRouter