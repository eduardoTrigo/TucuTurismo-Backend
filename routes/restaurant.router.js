const { createRestaurant, getRestaurant, deleteRestaurant, updateRestaurant } = require('../controllers/restaurat.controllers')

const restaurantRouter = require('express').Router()

//enrutador para crear restaurants
restaurantRouter.post('/', createRestaurant)
//enrutador para mostrar restaurants
restaurantRouter.get('/', getRestaurant)
//enrutador para mostrar restaurants por id
restaurantRouter.get('/:id', getRestaurant)
//enrutador para eliminar restaurants por id
restaurantRouter.delete('/:id', deleteRestaurant)
//enrutador para actualizar restaurants por id
restaurantRouter.patch('/:id', updateRestaurant)

module.exports = restaurantRouter