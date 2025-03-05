const express = require("express");
const router = express.Router();
const FilterNames = require("../models/filterName"); // Import the model

// Add a new filter name to the Filter-Names collection
router.post("/addFilters", async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) return res.status(400).json({ message: "Filter name is required" });

    // Create a new filter name document
    const filterName = new FilterNames({ name });

    // Save the filter name to the collection
    await filterName.save();

    res.status(201).json({ message: "Filter name added successfully", filterName });
  } catch (err) {
    res.status(500).json({ message: "Error adding filter name", error: err.message });
  }
});

// Fetch all filter names from the Filter-Names collection
router.get("/", async (req, res) => {
  try {
    const filterNames = await FilterNames.find(); // Retrieve all filter names
    res.status(200).json(filterNames); // Send back the filter names
  } catch (err) {
    res.status(500).json({ message: "Error fetching filter names", error: err.message });
  }
});

module.exports = router;
