const mongoose = require("mongoose");
mongoose.set('strictQuery', false);

const billSchema = mongoose.Schema(
  {
    unitId: {
      type: String,
      required: true,
    },
    instituteId: {
      type: String,
      required: true,
    },
    invoiceNumber: {
      type: Number,
      required: true,
      unique: [true, "Invoice number already exists"],
    },
    placeOfSupply: {
      type: String,
      required: true,
    },
    instituteCode: {
      type: String,
      required: true,
    },
    dateOfBillGeneration: {
      type: Date,
      required: true,
    },
    dateOfSupply: {
      type: Date,
      required: true,
    },
    timeOfSupply: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    rate: {
      type: Number,
      required: true,
    },
    taxableAmount: {
      type: Number,
      required: true,
    },
    totalAmount: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Bill", billSchema);
