const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new Schema({
    product: {
        type: Schema.Types.ObjectId,
        ref: "products",
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "users",
    },
    qty: {
        type: Number,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('cart', cartSchema);