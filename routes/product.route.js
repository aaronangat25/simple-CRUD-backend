const express = require('express');
const Product = require('../models/product.model.js') ;
const router = express.Router();
const { getProducts, getProduct, createProduct, updateProduct, deleteProduct } = require('../controllers/product.controller.js');

//VEIW PRODUCT/S
router.get('/', getProducts)
router.get('/:id', getProduct)


//ADD PRODUCT
router.post('/', createProduct)

//EDIT PRODUCT
router.put('/:id', updateProduct)

//DELETE PRODUCT
router.delete("/:id", deleteProduct)

module.exports = router