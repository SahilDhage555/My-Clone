const express = require("express");
const router = express.Router();
const ProductDetails = require("../models/productDetails"); // Import the model

// ✅ Add a new product
router.post("/addProduct", async (req, res) => {
  try {
    const { imgUrl, description, price, deliveryType, rating, reviews, trustLogo } = req.body;

    // Validate required fields
    if (!imgUrl || !description || !price || !deliveryType || !rating || !reviews) {
      return res.status(400).json({ message: "All required fields must be provided" });
    }

    // Create and save the new product
    const product = new ProductDetails({ imgUrl, description, price, deliveryType, rating, reviews, trustLogo });
    await product.save();

    res.status(201).json({ success: true, message: "Product added successfully", product });
  } catch (err) {
    console.error("❌ Error adding product:", err);
    res.status(500).json({ success: false, message: "Error adding product", error: err.message });
  }
});

// ✅ Fetch all products
router.get("/", async (req, res) => {
  try {
    const products = await ProductDetails.find(); // Retrieve all products
    res.status(200).json({ success: true, data: products });
  } catch (err) {
    console.error("❌ Error fetching products:", err);
    res.status(500).json({ success: false, message: "Error fetching products", error: err.message });
  }
});

module.exports = router;
