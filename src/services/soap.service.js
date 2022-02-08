const { Soap } = require("../models");

/**
 * Get all soaps
 * @returns {[Promise<Soap>]}
 */
function getAll() {
  return Soap.find({});
}

/**
 * Get Soap by mongodb id
 * @param {ObjectId} id,
 * @returns {Promise<Soap>}
 */
function getById(id) {
  return Soap.findById(id);
}

/**
 * Create a Soap
 * @param {String} name,
 * @param {String} description,
 * @param {String} img,
 * @param {Number} price,
 * @returns {Promise<Soap>}
 */
function create(name, description, img, price) {
  return Soap.create({ name, description, img, price });
}

/**
 * Delete Soap by mongodb id
 * @param {ObjectId} id,
 */
function deleteById(id) {
  return Soap.findByIdAndDelete(id);
}

/**
 * Update a Soap by id
 * @param {ObjectId} id,
 * @param {Object} dataUpdated,
 * @returns {Promise<Soap>}
 */
function putById(id, dataUpdated) {
  return Soap.findByIdAndUpdate(id, dataUpdated);
}
module.exports = {
  getAll,
  getById,
  create,
  deleteById,
  putById,
};
