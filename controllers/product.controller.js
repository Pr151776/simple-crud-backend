const Products = require('../models/product.model')

const getProduct = async(req, res) => {
    try {
        const {id} = req.params;
        const product = await Products.findById(id);
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message : error.message})
    }
};

const getAllProduct = async (req, res) => {
    try {
        const products = await Products.find({});
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({message : error.message})
    }
};

const createProduct = async (req, res) => {
    // console.log(req.body);
    // res.send(req.body);
    try {
        const product = await Products.create(req.body);
        res.status(201).json(product)
    } catch (error) {
        res.status(500).json({message : error.message});
    }
};

const updateProduct = async (req, res) => {
    try {
        const {id} = req.params;
        const product = await Products.findByIdAndUpdate(id, req.body);
        if (!product) {
            return res.status(404).json({message : "Product Not Found"})
        }
        const updatedProduct = await Products.findById(id);
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({message : error.message})
    }
};

const deleteProduct = async (req, res) => {
    try {
        const {id} = req.params;
        const product = await Products.findByIdAndDelete(id);
        if (!product) {
            return res.status(404).json({message : "Product not found"})
        }
        res.status(200).json({message : "Product Deleted Successfully"})
    } catch (error) {
        res.status(500).json({message : error.message})
    }
};

module.exports = {
    getProduct,
    getAllProduct,
    createProduct,
    updateProduct,
    deleteProduct
};