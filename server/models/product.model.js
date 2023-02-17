const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    title: { type: String},
    price: { type: Number },
    description: { 
        type: String,
        minlength:[5, 'It must be have at least 5 characters']}
}, { timestamps: true });
module.exports.Product = mongoose.model('Product', ProductSchema);

