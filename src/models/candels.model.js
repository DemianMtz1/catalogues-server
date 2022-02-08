const mongoose = require("mongoose");

const candelSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

/**
 * @typedef Candel
 */
const Candel = mongoose.model("Candel", candelSchema);

module.exports = Candel;
