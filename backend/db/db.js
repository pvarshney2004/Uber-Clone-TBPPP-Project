const mongoose = require("mongoose");
const bcrypt =require('bcrypt');
const jwt = require('jsonwebtoken');


function connectToDB() {
  mongoose
    .connect(process.env.DB_CONNECT)
    .then(() => {
      console.log("Connected to DB");
    })
    .catch((error) => console.log(error));
}

module.exports = connectToDB;
