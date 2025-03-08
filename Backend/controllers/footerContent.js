const Content = require("../models/footerContent"); // ✅ Correct path

// ✅ Add new footer content
const addContent = async (req, res) => {
  try {
    const { headline, subHeadline, description, links } = req.body;

    if (!headline || !description || !links) {
      return res.status(400).json({ message: "❌ Missing required fields!" });
    }

    const newContent = new Content({ headline, subHeadline, description, links });
    await newContent.save();

    res.status(201).json({ success: true, message: "✅ Content added successfully!", data: newContent });
  } catch (error) {
    console.error("❌ Error adding content:", error);
    res.status(500).json({ success: false, message: "Failed to add content", error });
  }
};

// ✅ Fetch footer content
const getFooterContent = async (req, res) => {
  try {
    const content = await Content.find();
    if (!content.length) {
      return res.status(404).json({ success: false, message: "No footer content found" });
    }
    res.status(200).json({ success: true, data: content });
  } catch (error) {
    console.error("❌ Error fetching content:", error);
    res.status(500).json({ success: false, message: "Error fetching footer content", error });
  }
};

module.exports = { addContent, getFooterContent }; // ✅ Export both functions
