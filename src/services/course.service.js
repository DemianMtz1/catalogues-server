const { Course } = require("../models");

/**
 * Get all course
 * @returns {[Promise<Course>]}
 */
function getAll() {
  return Course.find({})
    .populate("Material")
    .exec((err, materials) => {
      console.log("Populated materials", materials);
    });
}

/**
 * Get Course by mongodb id
 * @param {ObjectId} id,
 * @returns {Promise<Course>}
 */
function getById(id) {
  return Course.findById(id)
    .populate("Material")
    .exec((err, materials) => {
      console.log("Populated materials", materials);
    });
}

/**
 * Create a Course
 * @param {String} name,
 * @param {String} description,
 * @param {String} address,
 * @param {Number} price,
 * @param {[ObjectId]} materials
 * @returns {Promise<Course>}
 */
function create(name, description, address, price, materials) {
  return Course.create({ name, description, address, price, materials });
}

/**
 * Delete Course by mongodb id
 * @param {ObjectId} id,
 */
function deleteById(id) {
  return Course.findByIdAndDelete(id);
}

/**
 * Update a Course by id
 * @param {ObjectId} id,
 * @param {Object} dataUpdated,
 * @returns {Promise<Soap>}
 */
function putById(id, dataUpdated) {
  return Course.findByIdAndUpdate(id, dataUpdated);
}

module.exports = {
  getAll,
  getById,
  create,
  deleteById,
  putById,
};
