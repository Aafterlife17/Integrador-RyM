require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const router = require("./routes");
const PORT = process.env.PORT || 3001;
const server = express();
const sequelize = require("./DB_connection");

server.use(morgan("dev"));
server.use(cors());
server.use(express.json());
server.use("/", router);

sequelize.sync({ alter: true }).then(() => {
  server
    .listen(PORT, () => {
      console.log(`Listening on port ${PORT}`);
    })
    .catch((err) => {
      console.log(err);
    });
});
