const { courseService } = require("../services");

const getAllCourses = async (req, res, next) => {
  try {
    const courses = await courseService.getAll();
    res.status(200).json({
      success: true,
      message: "Request done successfully",
      data: courses,
    });
  } catch (error) {
    next(error);
  }
};

const getCourseById = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id) throw new Error("Id was not provided");

    const course = await courseService.getById(id);
    res.status(200).json({
      success: true,
      message: "Request done successfully",
      data: course,
    });
  } catch (error) {
    next(error);
  }
};

const postCourse = async (req, res, next) => {
  try {
    const { name, description, price, address, materials } = req.body;
    if (!name || !description || !price || !address || !materials)
      throw new Error("Invalid params, please verify.");

    const course = await courseService.create(
      name,
      description,
      address,
      price,
      materials
    );
    res.status(200).json({
      success: true,
      message: "Request done successfully",
      data: course,
    });
  } catch (error) {
    next(error);
  }
};

const deleteCourseById = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id) throw new Error("Id was not provided");

    const course = await courseService.deleteById(id);
    res.status(200).json({
      success: true,
      message: "Request done successfully",
      data: course,
    });
  } catch (error) {
    next(error);
  }
};

const putCourseById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    if (!id) throw new Error("Id was not provided");
    if (!body) throw new Error("There's no data to update");

    const course = await courseService.putById(id, body);
    res.status(200).json({
      success: true,
      message: "Request done successfully",
      data: course,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllCourses,
  getCourseById,
  postCourse,
  deleteCourseById,
  putCourseById,
};
