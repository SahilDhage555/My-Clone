require("dotenv").config();
const mongoose = require("mongoose");

const localURI = "mongodb://127.0.0.1:27017/Meesho"; // Local MongoDB
const atlasURI = process.env.MONGODB_URI; // Atlas URI from .env file

mongoose.connect(localURI, { useNewUrlParser: true, useUnifiedTopology: true });

const ProductSchema = new mongoose.Schema({}, { strict: false });
const Product = mongoose.model("products", ProductSchema);

mongoose.connection.once("open", async () => {
    console.log("✅ Connected to Local MongoDB");

    const data = await Product.find();
    console.log(`📦 Found ${data.length} records, transferring to Atlas...`);

    mongoose.disconnect();
    mongoose.connect(atlasURI, { useNewUrlParser: true, useUnifiedTopology: true });

    Product.insertMany(data)
        .then(() => console.log("🚀 Data transferred successfully!"))
        .catch(err => console.error("❌ Error transferring data:", err))
        .finally(() => mongoose.disconnect());
});
