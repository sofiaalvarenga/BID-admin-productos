const { Product } = require("../models/product.model");

module.exports.index = (request, response) => {
    response.json({
    message: "Welcome"
    });
}

module.exports.createProduct = async (request, response) => {
    try {
        const { title, price, description } = request.body;
        product = await Product.create({
            title,
            price,
            description
        });
        response.json(product);
    } catch (error) {
        response.status(400);
        response.json(error);
    }
}

module.exports.getAllProducts = async (request, response) => {
    try {
        const products = await Product.find({})
        response.json(products);
    } catch (error) {
        response.status(400);
        response.json(error);
    }
}

module.exports.getProduct = async (request, response) => {
    try {
        const product = await Product.findOne({_id:request.params.id})
        response.json(product);
    } catch (error) {
        response.status(400);
        response.json(error);
    }
}

module.exports.updateProduct = async (request, response) => {
    try {
        const product = await Product.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        response.json(product);
    } catch (error) {
        response.status(400);
        response.json(error);
    }
}

module.exports.deleteProduct = async (request, response) => {
    try {
        const product = await Product.deleteOne({ _id: request.params.id })
        response.json(product);
    } catch (error) {
        response.status(400);
        response.json(error);
    }
}