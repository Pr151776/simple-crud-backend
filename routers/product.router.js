const express = require('express')
const router = express.Router()
const Ctrl = require('../controllers/product.controller')


router.get('/:id', Ctrl.getProduct); //Get a Single product 
router.get('/', Ctrl.getAllProduct); //Get all product
router.post('', Ctrl.createProduct); //Post product
router.put('/:id', Ctrl.updateProduct); //Update product
router.delete('/:id', Ctrl.deleteProduct); //Delete product

module.exports = router;