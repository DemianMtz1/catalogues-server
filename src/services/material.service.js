const { Material } = require("../models");

/**
 * Get all materials
 * @returns {[Promise<Material>]}
 */
function getAll() {
  return Material.find({});
}

/**
 * Get Material by mongodb id
 * @param {ObjectId} id,
 * @returns {Promise<Material>}
 */
function getById(id) {
  return Material.findById(id);
}

/**
 * Create a Material
 * @param {String} name,
 * @returns {Promise<Material>}
 */
function create(name) {
  return Material.create({ name });
}

/**
 * Delete Material by mongodb id
 * @param {ObjectId} id,
 */
function deleteById(id) {
  return Material.findByIdAndDelete(id);
}

/**
 * Update a Material by id
 * @param {ObjectId} id,
 * @param {Object} dataUpdated,
 * @returns {Promise<Material>}
 */
function putById(id, dataUpdated) {
  return Material.findByIdAndUpdate(id, dataUpdated);
}

module.exports = {
  getAll,
  getById,
  create,
  deleteById,
  putById,
};
