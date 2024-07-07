const Restaurant = require("../models/restaurant")
const { uploadImage } = require("../utils/cloudinary.utils")

const fs = require('fs-extra')

//funcion para crear restaurant
const createRestaurant = async (req, res) => {
    const { name, description, address, categoryId } = req.body;
    const restaurant = new Restaurant({ name, description, address, categoryId });

    // Verificar si se adjuntó una imagen en la solicitud
    if (req.files && req.files.image) {
        const image = req.files.image;

        console.log('Temporary file path:', image.tempFilePath); // Log ruta del archivo temporal
        const result = await uploadImage(image.tempFilePath);

        // Asignar la imagen al restaurante
        restaurant.imagen = {
            public_id: result.public_id,
            secure_url: result.secure_url
        };

        // Eliminar el archivo temporal después de subirlo a Cloudinary
        if (image.tempFilePath) {
            await fs.unlink(image.tempFilePath);
        }
    }

    await restaurant.save();
    res.json(restaurant);
}

//controlador para buscar restaurantes
const getRestaurant = async (req, res) => {
    const { id } = req.params

    let query = undefined

    if (id !== undefined) {
        query = Restaurant.findById(id)
    } else {
        query = Restaurant.find({})
    }

    const response = await query.exec()
    res.json(response)
}

const deleteRestaurant = async (req, res) => {
    const { id } = req.params

    const restaurant = await Restaurant.findByIdAndDelete(id)

    if (!restaurant) {
        res.status(404)
        res.json({ message: 'el restaurant no existe' })
    }

    res.json(restaurant)

}

const updateRestaurant = async (req, res) => {
    const { id } = req.params

    const restaurant = await Restaurant.findById(id)

    if (!restaurant) {
        res.status(404)
        res.json({ message: 'el restaurant no existe' })
    }

    restaurant.name = req.body.name ?? restaurant.name
    restaurant.description = req.body.description ?? restaurant.description
    restaurant.address = req.body.address ?? restaurant.address
    restaurant.categoryId = req.body.categoryId ?? restaurant.categoryId

}

module.exports = { createRestaurant, getRestaurant, deleteRestaurant, updateRestaurant }