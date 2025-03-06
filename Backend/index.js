const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const filterRoutes = require("./routes/filterRoutes"); 
const productRoutes = require("./routes/productRoutes"); 
const footerRoutes = require("./routes/footerRoute"); 

const app = express();
app.use(bodyParser.json());
app.use(cors());

// ✅ Connect to MongoDB (Meesho Database)
mongoose
  .connect("mongodb://localhost:27017/Meesho")
  .then(() => console.log("✅ Connected to Meesho DB"))
  .catch((err) => console.error("❌ Error connecting to Meesho DB:", err));

// ✅ Use the Routes for Filters, Products, and Footer
app.use("/api/filters", filterRoutes);
app.use("/api/products", productRoutes);
app.use("/api/footer", footerRoutes); // ✅ Footer Content API

// ✅ Start the Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
