const mongoose = require("mongoose");
const { Course } = require("../models");

/**
 * Get all course
 * @returns {[Promise<Course>]}
 */
async function getAll() {
  return Course.find().populate("materials");
}

/**
 * Get Course by mongodb id
 * @param {ObjectId} id,
 * @returns {Promise<Course>}
 */
function getById(id) {
  return Course.findById(id).populate("materials");
}

/**
 * Create a Course
 * @param {String} name,
 * @param {String} description,
 * @param {String} city,
 * @param {String} address,
 * @param {Number} price,
 * @param {[ObjectId]} materials
 * @returns {Promise<Course>}
 */
function create(name, description, city, address, price, materials) {
  const materialsObjecId = materials.map((materialId) =>
    mongoose.Types.ObjectId(materialId)
  );
  return Course.create({
    name,
    description,
    city,
    address,
    price,
    materials: materialsObjecId,
  });
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
  if (dataUpdated.materials) {
    const materialsObjectId = dataUpdated.materials.map((materialId) =>
      mongoose.Types.ObjectId(materialId)
    );
    dataUpdated.materials = materialsObjectId;
  }
  return Course.findByIdAndUpdate(id, dataUpdated);
}

module.exports = {
  getAll,
  getById,
  create,
  deleteById,
  putById,
};
