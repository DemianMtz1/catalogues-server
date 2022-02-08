const handlingError = (error, req, res, next) => {
  res.status(400).json({
    success: false,
    message: "Technical error: " + error.message,
    data: null,
  });
};

module.exports = handlingError;
