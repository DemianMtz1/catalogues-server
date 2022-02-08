const { candelsService } = require("../services");

const getAllCandels = async (req, res, next) => {
  try {
    const candels = await candelsService.getAll();
    res.status(200).json({
      success: true,
      message: "Request done successfully",
      data: candels,
    });
  } catch (error) {
    next(error);
  }
};

const getCandelById = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id) throw new Error("Id was not provided");

    const candel = await candelsService.getById(id);
    res.status(200).json({
      success: true,
      message: "Request done successfully",
      data: candel,
    });
  } catch (error) {
    next(error);
  }
};

const postCandel = async (req, res, next) => {
  try {
    const { name, description, price, img } = req.body;
    if (!name || !description || !price || !img)
      throw new Error("Invalid params, please verify.");

    const candel = await candelsService.create(name, description, img, price);
    res.status(200).json({
      success: true,
      message: "Request done successfully",
      data: candel,
    });
  } catch (error) {
    next(error);
  }
};

const deleteCandelById = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id) throw new Error("Id was not provided");

    const candel = await candelsService.deleteById(id);
    res.status(200).json({
      success: true,
      message: "Request done successfully",
      data: candel,
    });
  } catch (error) {
    next(error);
  }
};

const putCandelById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    if (!id) throw new Error("Id was not provided");
    if (!body) throw new Error("There's no data to update");

    const candel = await candelsService.putById(id, body);
    res.status(200).json({
      success: true,
      message: "Request done successfully",
      data: candel,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllCandels,
  getCandelById,
  postCandel,
  deleteCandelById,
  putCandelById,
};
