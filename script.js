const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const morgan = require("morgan");
app.use(morgan("tiny"));

app.use(cors());
app.use("/assets", express.static(path.join(__dirname, "assets")));



app.get("/", (req, res) => {
  const host = `${req.protocol}://${req.get('host')}`;
  const jsonData = {
    products: [
      {
        image: {
          thumbnail: `${host}/assets/images/image-waffle-thumbnail.jpg`,
          mobile: `${host}/assets/images/image-waffle-mobile.jpg`,
          tablet: `${host}/assets/images/image-waffle-tablet.jpg`,
          desktop: `${host}/assets/images/image-waffle-desktop.jpg`,
        },
        name: "Waffle with Berries",
        category: "Waffle",
        price: 6.5,
      },
      {
        image: {
          thumbnail: `${host}/assets/images/image-creme-brulee-thumbnail.jpg`,
          mobile: `${host}/assets/images/image-creme-brulee-mobile.jpg`,
          tablet: `${host}/assets/images/image-creme-brulee-tablet.jpg`,
          desktop: `${host}/assets/images/image-creme-brulee-desktop.jpg`,
        },
        name: "Vanilla Bean Crème Brûlée",
        category: "Crème Brûlée",
        price: 7.0,
      },
      {
        image: {
          thumbnail: `${host}/assets/images/image-macaron-thumbnail.jpg`,
          mobile: `${host}/assets/images/image-macaron-mobile.jpg`,
          tablet: `${host}/assets/images/image-macaron-tablet.jpg`,
          desktop: `${host}/assets/images/image-macaron-desktop.jpg`,
        },
        name: "Macaron Mix of Five",
        category: "Macaron",
        price: 8.0,
      },
      {
        image: {
          thumbnail: `${host}/assets/images/image-tiramisu-thumbnail.jpg`,
          mobile: `${host}/assets/images/image-tiramisu-mobile.jpg`,
          tablet: `${host}/assets/images/image-tiramisu-tablet.jpg`,
          desktop: `${host}/assets/images/image-tiramisu-desktop.jpg`,
        },
        name: "Classic Tiramisu",
        category: "Tiramisu",
        price: 5.5,
      },
      {
        image: {
          thumbnail: `${host}/assets/images/image-baklava-thumbnail.jpg`,
          mobile: `${host}/assets/images/image-baklava-mobile.jpg`,
          tablet: `${host}/assets/images/image-baklava-tablet.jpg`,
          desktop: `${host}/assets/images/image-baklava-desktop.jpg`,
        },
        name: "Pistachio Baklava",
        category: "Baklava",
        price: 4.0,
      },
      {
        image: {
          thumbnail: `${host}/assets/images/image-meringue-thumbnail.jpg`,
          mobile: `${host}/assets/images/image-meringue-mobile.jpg`,
          tablet: `${host}/assets/images/image-meringue-tablet.jpg`,
          desktop: `${host}/assets/images/image-meringue-desktop.jpg`,
        },
        name: "Lemon Meringue Pie",
        category: "Pie",
        price: 5.0,
      },
      {
        image: {
          thumbnail: `${host}/assets/images/image-cake-thumbnail.jpg`,
          mobile: `${host}/assets/images/image-cake-mobile.jpg`,
          tablet: `${host}/assets/images/image-cake-tablet.jpg`,
          desktop: `${host}/assets/images/image-cake-desktop.jpg`,
        },
        name: "Red Velvet Cake",
        category: "Cake",
        price: 4.5,
      },
      {
        image: {
          thumbnail: `${host}/assets/images/image-brownie-thumbnail.jpg`,
          mobile: `${host}/assets/images/image-brownie-mobile.jpg`,
          tablet: `${host}/assets/images/image-brownie-tablet.jpg`,
          desktop: `${host}/assets/images/image-brownie-desktop.jpg`,
        },
        name: "Salted Caramel Brownie",
        category: "Brownie",
        price: 4.5,
      },
      {
        image: {
          thumbnail: `${host}/assets/images/image-panna-cotta-thumbnail.jpg`,
          mobile: `${host}/assets/images/image-panna-cotta-mobile.jpg`,
          tablet: `${host}/assets/images/image-panna-cotta-tablet.jpg`,
          desktop: `${host}/assets/images/image-panna-cotta-desktop.jpg`,
        },
        name: "Vanilla Panna Cotta",
        category: "Panna Cotta",
        price: 6.5,
      },
    ],
  };
  return res.status(200).json(jsonData);
});

app.get("/products", (req, res) => {

  const host = `${req.protocol}://${req.get('host')}`;
  const jsonData = {
    products: [
      {
        image: {
          thumbnail: `${host}/assets/images/image-waffle-thumbnail.jpg`,
          mobile: `${host}/assets/images/image-waffle-mobile.jpg`,
          tablet: `${host}/assets/images/image-waffle-tablet.jpg`,
          desktop: `${host}/assets/images/image-waffle-desktop.jpg`,
        },
        name: "Waffle with Berries",
        category: "Waffle",
        price: 6.5,
      },
      {
        image: {
          thumbnail: `${host}/assets/images/image-creme-brulee-thumbnail.jpg`,
          mobile: `${host}/assets/images/image-creme-brulee-mobile.jpg`,
          tablet: `${host}/assets/images/image-creme-brulee-tablet.jpg`,
          desktop: `${host}/assets/images/image-creme-brulee-desktop.jpg`,
        },
        name: "Vanilla Bean Crème Brûlée",
        category: "Crème Brûlée",
        price: 7.0,
      },
      {
        image: {
          thumbnail: `${host}/assets/images/image-macaron-thumbnail.jpg`,
          mobile: `${host}/assets/images/image-macaron-mobile.jpg`,
          tablet: `${host}/assets/images/image-macaron-tablet.jpg`,
          desktop: `${host}/assets/images/image-macaron-desktop.jpg`,
        },
        name: "Macaron Mix of Five",
        category: "Macaron",
        price: 8.0,
      },
      {
        image: {
          thumbnail: `${host}/assets/images/image-tiramisu-thumbnail.jpg`,
          mobile: `${host}/assets/images/image-tiramisu-mobile.jpg`,
          tablet: `${host}/assets/images/image-tiramisu-tablet.jpg`,
          desktop: `${host}/assets/images/image-tiramisu-desktop.jpg`,
        },
        name: "Classic Tiramisu",
        category: "Tiramisu",
        price: 5.5,
      },
      {
        image: {
          thumbnail: `${host}/assets/images/image-baklava-thumbnail.jpg`,
          mobile: `${host}/assets/images/image-baklava-mobile.jpg`,
          tablet: `${host}/assets/images/image-baklava-tablet.jpg`,
          desktop: `${host}/assets/images/image-baklava-desktop.jpg`,
        },
        name: "Pistachio Baklava",
        category: "Baklava",
        price: 4.0,
      },
      {
        image: {
          thumbnail: `${host}/assets/images/image-meringue-thumbnail.jpg`,
          mobile: `${host}/assets/images/image-meringue-mobile.jpg`,
          tablet: `${host}/assets/images/image-meringue-tablet.jpg`,
          desktop: `${host}/assets/images/image-meringue-desktop.jpg`,
        },
        name: "Lemon Meringue Pie",
        category: "Pie",
        price: 5.0,
      },
      {
        image: {
          thumbnail: `${host}/assets/images/image-cake-thumbnail.jpg`,
          mobile: `${host}/assets/images/image-cake-mobile.jpg`,
          tablet: `${host}/assets/images/image-cake-tablet.jpg`,
          desktop: `${host}/assets/images/image-cake-desktop.jpg`,
        },
        name: "Red Velvet Cake",
        category: "Cake",
        price: 4.5,
      },
      {
        image: {
          thumbnail: `${host}/assets/images/image-brownie-thumbnail.jpg`,
          mobile: `${host}/assets/images/image-brownie-mobile.jpg`,
          tablet: `${host}/assets/images/image-brownie-tablet.jpg`,
          desktop: `${host}/assets/images/image-brownie-desktop.jpg`,
        },
        name: "Salted Caramel Brownie",
        category: "Brownie",
        price: 4.5,
      },
      {
        image: {
          thumbnail: `${host}/assets/images/image-panna-cotta-thumbnail.jpg`,
          mobile: `${host}/assets/images/image-panna-cotta-mobile.jpg`,
          tablet: `${host}/assets/images/image-panna-cotta-tablet.jpg`,
          desktop: `${host}/assets/images/image-panna-cotta-desktop.jpg`,
        },
        name: "Vanilla Panna Cotta",
        category: "Panna Cotta",
        price: 6.5,
      },
    ],
  };

  return res.status(200).json(jsonData.products);
});

app.listen(3000, () => {
  console.log("App is running at port 3000");
});
