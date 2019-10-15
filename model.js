const mongoose = require('mongoose');

const CarSchema = mongoose.Schema({
    name: String,
    description: String,
    price: Number,
}, {
    timestamps: true
});

module.exports = mongoose.model('Cars', CarSchema);