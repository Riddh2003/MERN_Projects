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
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
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
    },
    refreshToken: {
        type: String
    },
    // roleId: {
    //     type: Schema.Types.ObjectId,
    //     ref: "role"
    // }
    role: {
        type: Schema.Types.ObjectId,
        ref: "role"
    }
}, { timestamps: true })

module.exports = mongoose.model('users', userSchema);