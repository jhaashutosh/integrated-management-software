const asyncHandler = require("express-async-handler");
const Bill = require("../models/billModel");
const Unit = require("../models/unitModel");

//Route --> /api/units/
const getUnits = asyncHandler(async (req, res) => {
  const units = await Unit.find({}).sort({ code: 1 });
  if (units) {
    res.status(200).json(units);
  } else {
    res.status(400);
    throw new Error("Error occured");
  }
});

const getUnitById = asyncHandler(async (req, res) => {
  const unit = await Unit.findById(req.params.id).lean();
  const bill = await Bill.find({}).sort({ invoiceNumber: -1 }).limit(1);
  if ({ ...unit }) {
    res
      .status(200)
      .json({ nextInvoiceNumber: bill[0]?.invoiceNumber + 1, ...unit });
  } else {
    res.status(400);
    throw new Error("Unit not found");
  }
});

const addInstitute = asyncHandler(async (req, res) => {
  const {
    unitId,
    code,
    nameOfInstitute,
    nameOfANO,
    mobileNumbers,
    officeNumbers,
  } = req.body;

  const unit = await Unit.findById(unitId);
  unit.institutes.push({
    code,
    unit: unit.institutes[0]?.unit,
    nameOfInstitute,
    nameOfANO,
    mobileNumbers,
    officeNumbers,
  });
  const resUnit = await unit.save();
  if (resUnit) {
    res.status(200).json({ message: "Institute added successfully" });
  } else {
    res.status(400);
    throw new Error("Error occured");
  }
});

const deleteInstitute = asyncHandler(async (req, res) => {
  const { unitId, instituteCode } = req.body;

  const unit = await Unit.findById(unitId);
  unit.institutes = unit.institutes.filter(
    (inst) => inst.code !== instituteCode
  );

  const resUnit = await unit.save();
  if (resUnit) {
    res.status(200).json({ message: "Institute deleted successfully" });
  } else {
    res.status(400);
    throw new Error("Error occured");
  }
});

const editInstitute = asyncHandler(async (req, res) => {
  const {
    newUnitId,
    oldUnitId,
    instituteId,
    instituteCode,
    nameOfInstitute,
    nameOfANO,
    mobileNumbers,
    officeNumbers,
  } = req.body;

  const oldUnit = await Unit.findById(oldUnitId);

  if (oldUnitId === newUnitId) {
    const instituteIndex = oldUnit.institutes.findIndex(
      (inst) => inst._id.toString() === instituteId
    );
    oldUnit.institutes = oldUnit.institutes.map((inst, index) => {
      if (index === instituteIndex) {
        return {
          ...inst,
          code: instituteCode,
          nameOfInstitute,
          nameOfANO,
          mobileNumbers,
          officeNumbers,
        };
      }
      return inst;
    });
  } else {
    oldUnit.institutes = oldUnit.institutes.filter((inst) => {
      return inst._id.toString() !== instituteId;
    });
    const newUnit = await Unit.findById(newUnitId);
    newUnit.institutes.push({
      code: instituteCode,
      unit: newUnit.institutes[0]?.unit,
      nameOfInstitute,
      nameOfANO,
      mobileNumbers,
      officeNumbers,
    });
    await newUnit.save();
  }

  let resUnit = await oldUnit.save();

  if (resUnit) {
    res.status(200).json({ message: "Institute edited successfully" });
  } else {
    res.status(400);
    throw new Error("Error occured");
  }
});

module.exports = {
  getUnits,
  getUnitById,
  addInstitute,
  deleteInstitute,
  editInstitute,
};
