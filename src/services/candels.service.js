const { Candel } = require("../models");

/**
 * Get all candels
 * @returns {[Promise<Candel>]}
 */
function getAll() {
  return Candel.find({});
}

/**
 * Get candel by mongodb id
 * @param {ObjectId} id,
 * @returns {Promise<Candel>}
 */
function getById(id) {
  return Candel.findById(id);
}

/**
 * Create a candel
 * @param {String} name,
 * @param {String} description,
 * @param {String} img,
 * @param {Number} price,
 * @returns {Promise<Candel>}
 */
function create(name, description, img, price) {
  return Candel.create({ name, description, img, price });
}

/**
 * Delete candel by mongodb id
 * @param {ObjectId} id,
 */
function deleteById(id) {
  return Candel.findByIdAndDelete(id);
}

/**
 * Update a candel by id
 * @param {ObjectId} id,
 * @param {Object} dataUpdated,
 * @returns {Promise<Candel>}
 */
function putById(id, dataUpdated) {
  return Candel.findByIdAndUpdate(id, dataUpdated);
}
module.exports = {
  getAll,
  getById,
  create,
  deleteById,
  putById,
};
