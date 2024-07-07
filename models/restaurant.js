const { default: mongoose , Schema } = require("mongoose")

const restaurantSchema = new mongoose.Schema({
    name:{
        type:String,
        require: true
    },
    description:{
        type: String,
        require: true
    },
    address:{
        type: String,
        require: true
    },
    categoryId:{
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true 
    },
    imagen: [{
        public_id: { type: String },
        secure_url: { type: String }
    }]
})

const Restaurant = mongoose.model('Restaurant', restaurantSchema)

module.exports = Restaurant