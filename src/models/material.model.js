const mongoose = require("mongoose");

const materialSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

/**
 * @typedef Material
 */
const Material = mongoose.model("Material", materialSchema);

module.exports = Material;
