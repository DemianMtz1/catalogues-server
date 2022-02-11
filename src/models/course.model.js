const mongoose = require("mongoose");

const courseSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
      maxLength: [300, "Too much text..."],
    },
    address: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    materials: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Material",
      },
    ],
  },
  {
    timestamps: true,
  }
);
/**
 * @typedef Course
 */
const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
