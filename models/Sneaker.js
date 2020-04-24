const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Sneaker {name, ref, sizes, description, price, category: [men, women, kids], id_tags: [ObjectId] }

const sneakerSchema = new Schema({
  name: String,
  ref: String,
  sizes: [Number],
  description: String,
  price: Number,
  category: {
    type: String,
    enum: ["men", "women", "kids"],
  },
  id_tags: [{ type: Schema.Types.ObjectId, ref: "Tag" }],
  image: {
    type: String,
    default: "http://source.unsplash.com/DMl5gG0yWWY"
  }
});

const Sneaker = mongoose.model("Sneaker", sneakerSchema);

module.exports = Sneaker;
