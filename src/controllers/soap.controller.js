const s3 = require("../lib/s3");
const { soapsService } = require("../services");

const getAllSoaps = async (req, res, next) => {
  try {
    const soaps = await soapsService.getAll();
    res.status(200).json({
      success: true,
      message: "Request done successfully",
      data: soaps,
    });
  } catch (error) {
    next(error);
  }
};

const getSoapById = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id) throw new Error("Id was not provided");

    const soap = await soapsService.getById(id);
    res.status(200).json({
      success: true,
      message: "Request done successfully",
      data: soap,
    });
  } catch (error) {
    next(error);
  }
};

const postSoap = async (req, res, next) => {
  try {
    const { name, description, price } = req.body;
    const file = req.file;
    if (!name || !description || !price || !file)
      throw new Error("Invalid params, please verify.");

    const result = await s3.uploadFile(file);
    const img = result.Location;
    if (!img) throw Error("The image can not be saved... Try again.");

    console.log(img);
    const soap = await soapsService.create(name, description, img, price);
    res.status(200).json({
      success: true,
      message: "Request done successfully",
      data: soap,
    });
  } catch (error) {
    next(error);
  }
};

const deleteSoapById = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id) throw new Error("Id was not provided");

    const soap = await soapsService.deleteById(id);
    res.status(200).json({
      success: true,
      message: "Request done successfully",
      data: soap,
    });
  } catch (error) {
    next(error);
  }
};

const putSoapById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    if (!id) throw new Error("Id was not provided");
    if (!body) throw new Error("There's no data to update");

    const soap = await soapsService.putById(id, body);
    res.status(200).json({
      success: true,
      message: "Request done successfully",
      data: soap,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllSoaps,
  getSoapById,
  postSoap,
  deleteSoapById,
  putSoapById,
};
