const asyncHandler = require("express-async-handler");
const { default: mongoose } = require("mongoose");
const Bill = require("../models/billModel");
const Unit = require("../models/unitModel");

const getAllBills = asyncHandler(async (req, res) => {
  const bills = await Bill.find({}).sort({ invoiceNumber: -1 }).limit(50);
  if (bills) {
    res.status(200).json(bills);
  } else {
    res.status(400);
    throw new Error("Error occured");
  }
});

const getBillById = asyncHandler(async (req, res) => {
  const bill = await Bill.findById(req.params.id).sort({ invoiceNumber: -1 });
  if (bill) {
    res.status(200).json(bill);
  } else {
    res.status(400);
    throw new Error("Bill not found");
  }
});

const getBillsByInstituteId = asyncHandler(async (req, res) => {
  const bills = await Bill.find({ instituteCode: req.params.id })
    .sort({ invoiceNumber: -1 })
    .lean();
  if (bills) {
    res.status(200).json(bills);
  } else {
    res.status(400);
    throw new Error("Bill not found");
  }
});

const getPrintBillDetails = asyncHandler(async (req, res) => {
  const printBillIds = req.body;
  let billDetails = [];

  const bills = await Bill.find({
    _id: {
      $in: printBillIds.map((id) => mongoose.Types.ObjectId(id)),
    },
  }).lean();

  await Promise.all(
    bills.map(async (each) => {
      const unit = await Unit.findById(each.unitId);
      billDetails.push({ bill: each, unit });
    })
  );

  if (billDetails.length > 0) {
    res.status(200).json(billDetails);
  } else {
    res.status(400);
    throw new Error("Bill not found");
  }
});

const deleteBillById = asyncHandler(async (req, res) => {
  const bill = await Bill.findById(req.params.id);
  if (bill) {
    await bill.deleteOne();
    res.status(200).json({ message: "Bill removed" });
  } else {
    res.status(400);
    throw new Error("Bill not found");
  }
});

const saveBill = asyncHandler(async (req, res) => {
  const savedBill = await Bill.create(req.body);
  if (savedBill) {
    res.status(200).json(savedBill);
  } else {
    res.status(400);
    throw new Error("Invalid Bill Format");
  }
});

const updateBill = asyncHandler(async (req, res) => {
  const bill = await Bill.findById(req.params.id);

  if (bill) {
    bill.invoiceNumber = req.body.invoiceNumber || bill.invoiceNumber;
    bill.placeOfSupply = req.body.placeOfSupply || bill.placeOfSupply;
    bill.timeOfSupply = req.body.timeOfSupply || bill.timeOfSupply;
    bill.dateOfSupply = req.body.dateOfSupply || bill.dateOfSupply;
    bill.dateOfBillGeneration =
      req.body.dateOfBillGeneration || bill.dateOfBillGeneration;
    bill.quantity = req.body.quantity || bill.quantity;
    bill.rate = req.body.rate || bill.rate;
    bill.taxableAmount = req.body.taxableAmount || bill.taxableAmount;
    bill.totalAmount = req.body.totalAmount || bill.totalAmount;

    const updatedBill = await bill.save();
    res.status(200).json(updatedBill);
  } else {
    res.status(400);
    throw new Error("Bill not found");
  }
});

const filterBillsByDate = asyncHandler(async (req, res) => {
  const date = new Date(req.query.date);
  const lt = new Date(req.query.date);
  lt.setDate(lt.getDate() + 1);

  const bills = await Bill.find({
    dateOfSupply: { $gte: date, $lt: lt },
  }).sort({ invoiceNumber: -1 });

  if (bills) {
    res.status(200).json(bills);
  } else {
    res.status(400);
    throw new Error("Bills not found");
  }
});

const filterBillsByRange = asyncHandler(async (req, res) => {
  const from = new Date(req.query.from);
  const to = new Date(req.query.to);

  const bills = await Bill.find({
    dateOfSupply: { $gte: from, $lte: to },
  }).sort({ invoiceNumber: -1 });

  if (bills) {
    res.status(200).json(bills);
  } else {
    res.status(400);
    throw new Error("Bills not found");
  }
});

const filterInstituteBillsByDate = asyncHandler(async (req, res) => {
  const date = new Date(req.query.date);
  const lt = new Date(req.query.date);
  const instituteCode = req.query.instituteCode;
  lt.setDate(lt.getDate() + 1);

  const bills = await Bill.find({
    dateOfSupply: { $gte: date, $lt: lt },
  })
    .find({ instituteCode: instituteCode })
    .sort({ invoiceNumber: -1 });

  if (bills) {
    res.status(200).json(bills);
  } else {
    res.status(400);
    throw new Error("Bills not found");
  }
});

const filterInstituteBillsByRange = asyncHandler(async (req, res) => {
  const from = new Date(req.query.from);
  const to = new Date(req.query.to);
  const instituteCode = req.query.instituteCode;

  console.log(from, to, instituteCode);

  const bills = await Bill.find({
    dateOfSupply: { $gte: from, $lte: to },
  })
    .find({ instituteCode: instituteCode })
    .sort({ invoiceNumber: -1 });

  if (bills) {
    res.status(200).json(bills);
  } else {
    res.status(400);
    throw new Error("Bills not found");
  }
});

module.exports = {
  getAllBills,
  getBillById,
  getBillsByInstituteId,
  deleteBillById,
  saveBill,
  updateBill,
  getPrintBillDetails,
  filterBillsByRange,
  filterBillsByDate,
  filterInstituteBillsByDate,
  filterInstituteBillsByRange,
};
