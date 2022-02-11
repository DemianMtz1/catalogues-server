const { userService } = require("../services");

const getAllUsers = async (req, res, next) => {
  try {
    const users = await userService.getAll();
    res.status(200).json({
      success: true,
      message: "Request done successfully",
      data: users,
    });
  } catch (error) {
    next(error);
  }
};

const getUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id) throw new Error("Id was not provided");

    const user = await userService.getById(id);
    res.status(200).json({
      success: true,
      message: "Request done successfully",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

const postSignUp = async (req, res, next) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    if (!firstName || !lastName || !email || !password)
      throw new Error("Invalid params, please verify.");

    const { user, token } = await userService.signUp(
      firstName,
      lastName,
      email,
      password
    );

    res.status(200).json({
      success: true,
      message: "Request done successfully",
      data: {
        user,
        token,
      },
    });
  } catch (error) {
    next(error);
  }
};

const postLogIn = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) throw new Error("Invalid params, please verify.");

    const { token } = await userService.logIn(email, password);

    res.status(200).json({
      success: true,
      message: "Request done successfully",
      data: {
        token,
      },
    });
  } catch (error) {
    next(error);
  }
};

const putUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    if (!id) throw new Error("Id was not provided");
    if (!body) throw new Error("There's no data to update");

    const user = await userService.updateById(id, body);
    res.status(200).json({
      success: true,
      message: "Request done successfully",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

const deleteUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    if (!id) throw new Error("Id was not provided");
    if (!body) throw new Error("There's no data to update");

    const user = await userService.deleteById(id);
    res.status(200).json({
      success: true,
      message: "Request done successfully",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  deleteUserById,
  getAllUsers,
  getUserById,
  postSignUp,
  postLogIn,
  putUserById,
};
