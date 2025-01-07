const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    avatar: {
        type: Buffer
    },
    avatarType: String
}, {
    timestamps: true
})

const Product = mongoose.model("Products", productSchema);

module.exports = { Product }
