const express = require("express");
const router = express.Router();
const { addContent, getFooterContent } = require("../controllers/footerContent"); // ✅ Corrected path

// ✅ API to add footer content
router.post("/add", addContent);

// ✅ API to fetch footer content
router.get("/aboutFooter", getFooterContent);

module.exports = router;
