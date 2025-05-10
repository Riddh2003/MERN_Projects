const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    productName: {
        type: String,
        required: true
    },
    productQty: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['IN_STOCK', 'OUT_OF_STOCK', 'DISCONTINUED'],
        default: 'IN_STOCK',
    },
}, { timestamps: true });

module.exports = mongoose.model('products', productSchema);