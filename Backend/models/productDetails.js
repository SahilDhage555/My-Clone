const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  imgUrl: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^https?:\/\/.+/.test(v); // Basic URL validation
      },
      message: (props) => `${props.value} is not a valid URL!`,
    },
  },
  description: {
    type: String,
    required: true,
    trim: true, // Removes leading/trailing spaces
  },
  price: {
    type: Number,
    required: true,
    min: [0, "Price cannot be negative"], // Ensure price is non-negative
  },
  deliveryType: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: [0, "Rating cannot be less than 0"],
    max: [5, "Rating cannot be greater than 5"],
  },
  reviews: {
    type: Number,
    required: true,
    min: [0, "Reviews cannot be negative"],
  },
  trustLogo: {
    type: String,
    validate: {
      validator: function (v) {
        return /^https?:\/\/.+/.test(v); // Basic URL validation
      },
      message: (props) => `${props.value} is not a valid URL!`,
    },
  },
});

module.exports = mongoose.model("ProductDetails", productSchema);
