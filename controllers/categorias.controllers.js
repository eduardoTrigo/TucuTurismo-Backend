const mongoose = require("mongoose");
const Category = require("../models/category");


const createCategory = async (req, res) => {
    const { name, description } = req.body
    const category = new Category({ name, description })
    await category.save()

    res.json(category)
}

const getCategory = async ( req , res) => {
    const { name  } = req.query

    let query = undefined

    if (name !== undefined) {
        query = Category.findById(name)
    }else{
        query = Category.find({})
    }

    const response = await query.exec()

    res.json(response)
}

module.exports = { createCategory , getCategory }