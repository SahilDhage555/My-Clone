const express = require("express");
const router = express.Router();
const FilterNames = require("../models/filterName"); // Import the model

// ✅ Add a new filter name
router.post("/addFilters", async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) return res.status(400).json({ message: "Filter name is required" });

    // Create and save the filter name
    const filterName = new FilterNames({ name });
    await filterName.save();

    res.status(201).json({ success: true, message: "Filter name added successfully", filterName });
  } catch (err) {
    console.error("❌ Error adding filter name:", err);
    res.status(500).json({ success: false, message: "Error adding filter name", error: err.message });
  }
});

// ✅ Fetch all filter names
router.get("/", async (req, res) => {
  try {
    const filterNames = await FilterNames.find(); // Retrieve all filters
    res.status(200).json({ success: true, data: filterNames });
  } catch (err) {
    console.error("❌ Error fetching filters:", err);
    res.status(500).json({ success: false, message: "Error fetching filters", error: err.message });
  }
});

module.exports = router;
