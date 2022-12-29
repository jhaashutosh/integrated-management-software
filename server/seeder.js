const mongoose = require("mongoose");
require("dotenv").config();
const connectDB = require("./utils/db.js");
const User = require("./models/userModel.js");
const Unit = require("./models/unitModel.js");
const users = require("./data/users.js");
const units = require("./data/units.js");

const importData = async () => {
  try {
    await connectDB();
    // await User.deleteMany();
    await Unit.deleteMany();
    // const createdUsers = await User.insertMany(users);
    const createdUnits = await Unit.insertMany(units);
    console.log("Data imported successfully");
    process.exit();
  } catch (error) {
    console.log(`${error}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await connectDB();
    // await User.deleteMany();
    await Unit.deleteMany();
    console.log("Data destroyed successfully");
    process.exit();
  } catch (error) {
    console.log(`${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
