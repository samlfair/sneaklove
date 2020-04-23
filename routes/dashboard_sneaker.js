const express = require("express"); // import express in this module
const router = new express.Router(); // create an app sub-module (router)
const Sneaker = require("../models/Sneaker");

 router.get("/add", (req, res)=>{
     res.render("products_add")
 }); 

 router.get("/product-edit/:id", (req, res)=>{
     Sneaker.findById(req.params.id)
     .then((dbRes)=>{
 res.render("product_edit", {sneaker: dbRes})
     })
     .catch((err)=>{console.log(err)})
    
 })

 router.get("/manage", (req, res)=>{
     Sneaker.find({})
     .then((dbRes)=>{
 res.render("products_manage", {
     sneakers: dbRes
 })
     }).catch((err)=>{console.log(err)})
    
 })


 router.post("/add", (req, res)=>{
     
 })




module.exports = router;
