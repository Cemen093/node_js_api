const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const RegionScheme = new Schema({
    title: String,
});

module.exports = mongoose.model("Region", RegionScheme);