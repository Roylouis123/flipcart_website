import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    id: {
        type:"string",
        required: true,
        unique: true
    },
    url: String,
    detailUrl: String,
    title: Object,
    price:Object,
    quantity: Number,
    description: String,
    discount: String,
    tagline: String
})

const product =mongoose.model('Product', productSchema)

export default product