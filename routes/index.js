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
  console.log(req.params.cat);
  try {
    let dbResSneaker;
    if (req.params.cat === "collection") {
      dbResSneaker = await Sneaker.find({});
    } else {
      dbResSneaker = await Sneaker.find({ category: req.params.cat });
    }
    const dbResTag = await Tag.find({});
    res.render("products", {
      sneakers: dbResSneaker,
      category: req.params.cat,
      tags: dbResTag,
    });
  } catch (err) {
    console.log(err);
  }
}

router.get("/one-product/:id", (req, res) => {
  renderOneProduct(req, res);
});

async function renderOneProduct(req, res) {
  try {
    const dbResSneaker = await Sneaker.findById(req.params.id);
    res.render("one_product", {
      sneaker: dbResSneaker,
    });
  } catch (err) {
    console.log(err);
  }
}

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.get("/signin", (req, res) => {
  res.render("signin");
});

module.exports = router;
