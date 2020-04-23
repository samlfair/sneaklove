const express = require("express");
const router = new express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");

// Bcrypt with asyn await instead of promises to train

//This route only renders the signin form

router.get("/signin", (req, res) => {
  res.render("signin.hbs");
});

//This one is for receiving post data from the signin form

router.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  const user = User.findOne({ email: email });
  if (user === null) {
    return res.status(400).send("Can not find user");
  }

  try {
    if (await bcrypt.compare(password, user.password)) {
      res.send("Success!!");
    } else {
      res.send("Not allowed");
    }
  } catch {
    res.status(500).send();
  }
});

// This route only renders the signup form
router.get("/signup", (req, res) => {
  res.render("signup.hbs");
});

// This one is for receiving post data from the signup form

router.post("/signup", async (req, res) => {
  try {
    console.log(req.body);
    const hashPassword = await bcrypt.hash(req.body.password, 10);
    const user = {
      name: req.body.name,
      lastName: req.body.lastName,
      email: req.body.email,
      password: hashPassword,
    };
    User.create(user);
    res.status(201).send();
  } catch (err) {
    console.log(err);
    res.status(500).send();
  }
});

module.exports = router;
