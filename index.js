require("dotenv").config();
const connect = require("./src/lib/db");
const app = require("./src/server");

const PORT = process.env.PORT || 3000;

connect()
  .then((db) => {
    console.log("Data base connected to ", db.connection.host);
    app.listen(PORT, () => {
      console.log("server on port ", PORT);
    });
  })
  .catch((err) => console.error(err));
