const express = require("express");
const router = express.Router();
const Sneaker = require("../models/Sneaker");
const Tag = require("../models/Tag");

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/sneakers/:cat", (req, res) => {
  renderCategoryPage(req, res);
});

async function renderCategoryPage(req, res) {
  categoryId = req.params.cat;
  try {
    const dbResSneaker = await Sneaker.find({ tag_id: categoryId }); // not sure if this is working
    const dbResTag = await Tag.find({});
    const dbResCat = await Tag.findById(categoryId);
    res.render("products", {
      sneakers: dbResSneaker,
      category: dbResCat.label,
      tags: dbResTag,
    });
  } catch (err) {
    console.log(err);
  }
}

router.get("/one-product/:id", (req, res) => {
  res.send("baz");
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.get("/signin", (req, res) => {
  res.render("signin");
});

module.exports = router;
