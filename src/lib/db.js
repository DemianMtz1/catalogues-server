const mongoose = require("mongoose");
const { hostname_db } = require("../configs/db.config");

function connect() {
  return mongoose.connect(hostname_db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

module.exports = connect;
