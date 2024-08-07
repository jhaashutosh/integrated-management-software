const mongoose = require("mongoose");
mongoose.set('strictQuery', false);

const connectDB = async () => {
  try {
    const dbConnection = await mongoose.connect(process.env.DATABASE_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log(`MongoDB connected ${dbConnection.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
