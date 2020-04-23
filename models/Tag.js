const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Tags {label}

const tagSchema = new Schema({
  label: String,
});

const Tag = mongoose.model("Tag", tagSchema);

module.exports = Tag;
