const bcrypt = require("../lib/bcrypt");
const jwt = require("../lib/jwt");
const { User } = require("../models");

/**
 * Get all users
 * @returns {[Promise<User>]}
 */
function getAll() {
  return User.find({});
}

/**
 * Get users by id
 * @returns {Promise<User>}
 */
function getById(id) {
  return User.findById(id);
}

/**
 * Register a user
 * @param {String} firstName,
 * @param {String} lastName,
 * @param {String} email,
 * @param {String} password,
 * @returns {Promise<User>}
 */
async function signUp(firstName, lastName, email, password) {
  const isTaken = await User.isEmailTaken(email);
  if (isTaken) throw new Error("Email already taken");

  const encryptedPassword = await bcrypt.hash(password);
  const user = await User.create({
    firstName,
    lastName,
    email,
    password: encryptedPassword,
  });
  const token = await jwt.sign({
    id: user._id,
  });

  return {
    token,
    user,
  };
}

/**
 * log in using email
 * @param {String} email,
 * @param {String} password,
 * @returns {Promise<User>}
 */
async function logIn(email, password) {
  const user = await User.findOne({ email });
  if (!user) throw new Error("Invalid credentials, validate again");

  const areSame = await bcrypt.compare(password, user.password);
  if (!areSame) throw new Error("Invalid credentials, validate again");
  
  const token = await jwt.sign({
    id: user._id,
  });

  return { token };
}

/**
 * Update a user
 * @param {ObjectId} id,
 * @param {Object} dataUpdated,
 * @returns {Promise<User>}
 */
async function updateById(id, dataUpdated) {
  const { email, password } = dataUpdated;
  if (email) {
    const isTaken = await User.methods.isEmailTaken(email);
    if (isTaken) throw new Error("Email already taken");
  }

  if (password) {
    const encryptedPassword = await bcrypt.hash(password);
    return User.findByIdAndUpdate(id, {
      ...dataUpdated,
      password: encryptedPassword,
    });
  }
  return User.findByIdAndUpdate(id, dataUpdated);
}

/**
 * delete a user by id
 * @param {ObjectId} id,
 * @returns {Promise<User>}
 */
function deleteById(id) {
  return User.findByIdAndDelete(id);
}

module.exports = {
  getAll,
  getById,
  signUp,
  logIn,
  deleteById,
  updateById,
};
