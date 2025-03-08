const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");

const filterRoutes = require("./routes/filterRoutes");
const productRoutes = require("./routes/productRoutes");
const footerRoutes = require("./routes/footerRoute");

const app = express();
app.use(cors());
app.use(express.json()); // ✅ Required for POST requests

mongoose.set("strictQuery", false);

// ✅ Connect to MongoDB Atlas
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000,
    });
    console.log("✅ MongoDB Atlas Connected Successfully!");
  } catch (err) {
    console.error("❌ MongoDB Connection Failed!", err);
    process.exit(1); // Stop server if DB connection fails
  }
};
connectDB();

// ✅ Debugging MongoDB Connection
mongoose.connection.on("connected", () => console.log("✅ Connected to MongoDB Atlas"));
mongoose.connection.on("error", (err) => console.error("❌ MongoDB Error:", err));

app.use("/filters", filterRoutes);
app.use("/products", productRoutes);
app.use("/footer", footerRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
