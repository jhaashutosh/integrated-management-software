const bcrypt = require("bcryptjs");
module.exports = [
  {
    name: "User 1",
    email: "user1@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "User 2",
    email: "user1@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Mr Admin",
    email: "adminuser@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
];
