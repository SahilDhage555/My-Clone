const express = require("express");
const router = express.Router();
const ProductDetails = require("../models/productDetails"); // Import the ProductDetails model

// Add a new product to the ProductDetails collection
router.post("/addProduct", async (req, res) => {
  try {
    const {
      imgUrl,
      description,
      price,
      deliveryType,
      rating,
      reviews,
      trustLogo,
    } = req.body;

    // Validate required fields
    if (
      !imgUrl ||
      !description ||
      !price ||
      !deliveryType ||
      !rating ||
      !reviews
    ) {
      return res
        .status(400)
        .json({ message: "All required fields must be provided" });
    }

    // Create a new product document
    const product = new ProductDetails({
      imgUrl,
      description,
      price,
      deliveryType,
      rating,
      reviews,
      trustLogo,
    });

    // Save the product to the collection
    await product.save();

    res.status(201).json({ message: "Product added successfully", product });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error adding product", error: err.message });
  }
});

// Fetch all products from the ProductDetails collection
router.get("/", async (req, res) => {
  try {
    const products = await ProductDetails.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: "Error fetching products", error: err.message });
  }
});

module.exports = router;
