const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number
    },
    gender: {
        type: String
    },
    status: {
        type: Boolean,
        default: true
    },
    sports: [
        {
            type: String
        }
    ],
    bloodgroups: {
        enum: ["A+", "B+", "A-", "B-", "O+"],
        type: String
    }

}, { timestamps: true })

module.exports = mongoose.model('users', userSchema);