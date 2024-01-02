const Task = require("../model/Task");
const Staff = require("../model/Staff");

const getAllStaffs = async (req, res, next) => {
  try {
    const staffs = await Staff.find();

    res.render("staffInfo.ejs", {
      staffs: staffs,
      text: "Staff",
    });
  } catch (err) {
    res.status(500).render("500.ejs", {
      pageTitle: "Error !",
      message: err.message,
    });
  }
};

const getStaff = async (req, res, next) => {
  try {
    const staffs = await Staff.findById({ _id: req.params.id });

    res.render("viewStaff.ejs", {
      staffs,
      text: "View profile",
    });
  } catch (err) {
    res.status(500).render("500.ejs", {
      pageTitle: "Error !",
      message: err.message,
    });
  }
};

const updateStaff = async (req, res, next) => {
  try {
    await Staff.updateOne({ _id: req.params.id }, req.body);

    res.redirect("back");
  } catch (err) {
    res.status(500).render("500.ejs", {
      pageTitle: "Error !",
      message: err.message,
    });
  }
};

const deleteStaff = async (req, res, next) => {
  try {
    // await Staff.deleteOne({ _id: req.params.id });
    const staff = await Staff.findOne({ _id: req.params.id });

    staff.isDeleted = true;

    await staff.save();

    res.redirect("back");
  } catch (err) {
    res.status(500).render("500.ejs", {
      pageTitle: "Error !",
      message: err.message,
    });
  }
};

module.exports = {
  getAllStaffs,
  getStaff,
  updateStaff,
  deleteStaff,
};
