const productModel = require('../models/ProductModel');
const cartModel = require('../models/CartModel');

const addProduct = async (req, res) => {
    try {
        const product = await productModel.create(req.body);
        res.status(201).json({
            message: "Product Successfully Add....",
            data: product
        })
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error...",
            data: error
        })
    }
}

const addToCart = async (req, res) => {
    try {
        const { user, product, qty } = req.body;
        const exitingCartItem = await cartModel.findOne({ user, product });
        if (exitingCartItem) {
            exitingCartItem.qty += qty;
            await exitingCartItem.save();
            return res.status(200).json({
                message: "Product quantity updated in cart.",
                data: exitingCartItem
            });
        } else {
            const newCartItem = new cartModel({
                user,
                product,
                qty
            })
            await newCartItem.save();
            return res.status(201).json({
                message: "Product added to cart.",
                data: newCartItem
            });
        }

    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error...",
            data: error
        })
    }
}

module.exports = {
    addProduct,
    addToCart
}