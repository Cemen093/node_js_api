const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const HeadingScheme = new Schema({
    url: String,
    title: String
});

module.exports = mongoose.model("Heading", HeadingScheme);