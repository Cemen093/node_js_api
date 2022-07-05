const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AdScheme = new Schema({
    url: String,
    title: String,
    description: String,
    price: Number,
    date: Date,
    regionId: Number,
    headingId: Number,
    vip: Boolean,
});

module.exports = mongoose.model("Ad", AdScheme);