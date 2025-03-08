require("dotenv").config();
const mongoose = require("mongoose");

const localURI = "mongodb://127.0.0.1:27017/Meesho"; // Local MongoDB
const atlasURI = process.env.MONGODB_URI; // MongoDB Atlas

const transferCollection = async (collectionName) => {
    try {
        // Connect to Local DB
        const localConnection = await mongoose.createConnection(localURI).asPromise();
        console.log(`✅ Connected to Local MongoDB, fetching ${collectionName}...`);

        const LocalModel = localConnection.model(collectionName, new mongoose.Schema({}, { strict: false }));
        const data = await LocalModel.find().lean(); // Using .lean() to avoid session issues
        await localConnection.close();
        console.log(`📦 Found ${data.length} records, transferring ${collectionName} to Atlas...`);

        // Connect to Atlas DB
        const atlasConnection = await mongoose.createConnection(atlasURI).asPromise();
        const AtlasModel = atlasConnection.model(collectionName, new mongoose.Schema({}, { strict: false }));

        await AtlasModel.insertMany(data);
        console.log(`🚀 Successfully transferred ${collectionName} to Atlas!`);

        await atlasConnection.close();
    } catch (error) {
        console.error(`❌ Error transferring ${collectionName}:`, error);
    }
};

// Transfer only the required collections
(async () => {
    await transferCollection("Filter-Names");
    await transferCollection("FooterContent");
    await transferCollection("ProductDetails");
})();
