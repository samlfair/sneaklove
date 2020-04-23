require("dotenv").config();
const mongoose = require("mongoose");
const Sneaker = require("../models/Sneaker");
const Tag = require("../models/Tag");

// const sneakers = [
//   {
//     ref: "Air Jordan",
//     name: "Nike",
//     sizes: [7, 8, 9, 10, 11, 12, 13],
//     description: "The bounciest boots in basketball.",
//     price: 500,
//     category: "men",
//     id_tags: ["5ea16c11b318710a11dbffc6"],
//   },
//   {
//     ref: "All-Star",
//     name: "Converse",
//     sizes: [5, 6, 7, 8],
//     description: "Cooler than Keds for cool kids.",
//     price: 80,
//     category: "kids",
//     id_tags: ["5ea16c11b318710a11dbffc8"],
//   },
// ];

// const tags = [
//   {
//     label: "Running Shoes",
//   },
//   {
//     label: "Tennis Shoes",
//   },
//   {
//     label: "Casual",
//   },
// ];

mongoose
  .connect(process.env.MONGO_URI)
  .then((self) => {
    console.log(`Connected to ${self.connection.name}`);

    // Clear database
    Sneaker.deleteMany({}, (dbRes) => console.log(dbRes));
    // Tag.deleteMany({}, (dbRes) => console.log(dbRes));

    // Seeds
    // Tag.create(tags)
    //   .then((objects) => {
    //     objects.forEach((object) => {
    //       console.log(object);
    //     });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    Sneaker.create(sneakers)
      .then((objects) => {
        objects.forEach((object) => {
          console.log(object);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  })
  .catch((err) => {
    console.log(`Error occured while connecting to the Database ${err}`);
  });
