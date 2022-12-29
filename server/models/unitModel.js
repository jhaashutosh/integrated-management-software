const mongoose = require("mongoose");

const unitSchema = mongoose.Schema({
  code: {
    type: Number,
    required: true,
  },
  unit: {
    type: String,
    default: "",
  },
  nccHq: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    default: "",
  },
  email: String,
  nameOfIncharge: {
    type: String,
    default: "",
  },
  officeNumbers: [String],
  mobileNumbers: [String],
  institutes: [
    {
      code: {
        type: Number,
        required: true,
      },
      unit: {
        type: String,
        default: "",
      },
      nameOfInstitute: {
        type: String,
        required: true,
      },
      location: String,
      contactName: String,
      nameOfPrincipal: String,
      nameOfANO: String,
      mobileNumbers: [String],
      officeNumbers: [String],
      email: String,
    },
  ],
});

module.exports = mongoose.model("Unit", unitSchema);
