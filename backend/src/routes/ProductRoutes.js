const router = require('express').Router();
const productController = require('../controllers/ProductController');
router.post('/addproduct', productController.addProduct);
router.post('/addtocart', productController.addToCart);
// router.get('/getallcartproduct', productController);

module.exports = router;