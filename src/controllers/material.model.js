const { materialService } = require("../services");

const getAllMaterials = async (req, res, next) => {
  try {
    const materials = await materialService.getAll();
    res.status(200).json({
      success: true,
      message: "Request done successfully",
      data: materials,
    });
  } catch (error) {
    next(error);
  }
};

const getMaterialById = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id) throw new Error("Id was not provided");

    const material = await materialService.getById(id);
    res.status(200).json({
      success: true,
      message: "Request done successfully",
      data: material,
    });
  } catch (error) {
    next(error);
  }
};

const postMaterial = async (req, res, next) => {
  try {
    const { name } = req.body;
    if (!name) throw new Error("Invalid params, please verify.");

    const material = await materialService.create(name);
    res.status(200).json({
      success: true,
      message: "Request done successfully",
      data: material,
    });
  } catch (error) {
    next(error);
  }
};

const deleteMaterialById = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id) throw new Error("Id was not provided");

    const material = await materialService.deleteById(id);
    res.status(200).json({
      success: true,
      message: "Request done successfully",
      data: material,
    });
  } catch (error) {
    next(error);
  }
};

const putMaterialById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    if (!id) throw new Error("Id was not provided");
    if (!body) throw new Error("There's no data to update");

    const material = await materialService.putById(id, body);
    res.status(200).json({
      success: true,
      message: "Request done successfully",
      data: material,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllMaterials,
  getMaterialById,
  postMaterial,
  deleteMaterialById,
  putMaterialById,
};
