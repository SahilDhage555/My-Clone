const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();
const cors = require("cors");

const filterRoutes = require("./routes/filterRoutes");
const productRoutes = require("./routes/productRoutes");
const footerRoutes = require("./routes/footerRoute");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// ✅ Connect to MongoDB (Meesho Database)
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000, // Set timeout to 5s
    });
    console.log("MongoDB Connected Successfully!");
  } catch (err) {
    console.error("MongoDB Connection Failed!", err);
    process.exit(1); // Exit if DB connection fails
  }
};
connectDB();
// ✅ Use the Routes for Filters, Products, and Footer
app.use("/api/filters", filterRoutes);
app.use("/api/products", productRoutes);
app.use("/api/footer", footerRoutes); // ✅ Footer Content API

// ✅ Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
