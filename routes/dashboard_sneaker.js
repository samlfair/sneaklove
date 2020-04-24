const express = require("express"); // import express in this module
const router = new express.Router(); // create an app sub-module (router)
const Sneaker = require("../models/Sneaker");
const Tag = require("../models/Tag");
const multer = require("multer");
const upload = multer();

router.get("/add", (req, res) => {
  Tag.find({}).then((dbResTag) => {
    console.log(dbResTag);
    res.render("products_add", { tags: dbResTag });
  });
});

router.get("/product-edit/:id", async (req, res) => {
    try{
  const dbFindSneaker = await Sneaker.findById(req.params.id)
  const dbFindTag = await Tag.find({})
res.render("product_edit", { sneaker: dbFindSneaker,
 tags: dbFindTag });
    
} catch (err) {
      console.log(err);
    }
}); 


router.get("/manage", (req, res) => {
  Sneaker.find({})
    .then((dbRes) => {
      res.render("products_manage", {
        sneakers: dbRes,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/prod-add", upload.none(), (req, res) => {
  Sneaker.create(req.body)
    .then((dbRes) => {
      res.redirect("/one-product/" + dbRes._id);
    })
    .catch((err) => console.log(err));
});

router.post("/new-tag", (req, res) => {
  console.log(req.body);
  Tag.create(req.body)
    .then((dbRes) => {
      res.status(201).json({ response: dbRes });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/product-edit/:id" , (req, res)=>{
    console.log(req.params.id);
    Sneaker.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then((dbResult)=>{
        res.redirect('/one-product/' + dbResult._id);
        // res.status(201).json(dbResult)
    }).catch((err)=>{console.log(err)})

}); 

router.delete("/:id", (req, res)=>{
    Sneaker.findByIdAndDelete(req.params.id)
    .then((dbResult)=>{
         res.status(201).json({
         response: dbResult
         });
         })
         .catch((err) => {
             console.log(err);
         });

    })





module.exports = router;
