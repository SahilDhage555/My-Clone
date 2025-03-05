const mongoose = require("mongoose");

const contentSchema = new mongoose.Schema({
  headline: {
    type: String,
    trim: true,
  },
  subHeadline: {
    type: String,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  links: [
    {
      type: String,
      validate: {
        validator: function (v) {
          return /^(https?:\/\/[^\s$.?#].[^\s]*)$/.test(v); // Validates URL format
        },
        message: (props) => `${props.value} is not a valid URL!`,
      },
    },
  ],
}, { timestamps: true });

module.exports = mongoose.model("FooterContent", contentSchema);
