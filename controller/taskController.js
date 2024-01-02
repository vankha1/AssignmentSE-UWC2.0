const Task = require("../model/Task");
const Staff = require("../model/Staff");

const getAllTasks = async (req, res, next) => {
  try {
    const tasks = await Task.find().populate('nameTake', 'name isDeleted');

    res.render("task.ejs", {
      tasks,
      text: "Dashboard",
    });
  } catch (err) {
    res.status(500).render("500.ejs", {
      pageTitle: "Error !",
      message: err.message,
    });
  }
};

const getTaskDetail = async (req, res, next) => {
    try {
        const tasks = await Task.findById(req.params.id).populate('nameTake');

        if (!tasks){
            const error = new Error('Task not found');
            throw error;
        }

        const staffs = await Staff.find({});

        res.render('detailTask', {
            tasks: tasks,
            staffs: staffs,
            text: 'Detail Task'
        })
    } catch (err) {
        res.status(500).render("500.ejs", {
            pageTitle: "Error !",
            message: err.message,
          });
    }
}

const postNewTask = async (req, res, next) => {
  try {
    const formBody = { ...req.body };
    // console.log(formBody)
    formBody.status = "Chưa diễn ra";

    const staff = await Staff.find({ name: formBody.nameTake });

    // console.log(staff);
    // console.log(formBody);

    const task = new Task({
      ...formBody,
      nameTake: staff[0]?._id,
    });
    await task.save();
    res.redirect("/task");
  } catch (err) {
    res.status(500).render("500.ejs", {
      pageTitle: "Error !",
      message: err.message,
    });
  }
};

// [POST] /task/handle-form-actions
const handleFormAction = async (req, res, next) => {
  try {
    switch (req.body.action) {
      case "delete":
        await Task.deleteMany({ _id: { $in: req.body.taskIds } });

        res.redirect("back");
        break;
      default:
        res.redirect("/task");
    }
  } catch (err) {
    res.status(500).render("500.ejs", {
      pageTitle: "Error !",
      message: err.message,
    });
  }
};

const updateTask = async (req, res, next) => {
  try {
    await Task.updateOne({ _id: req.params.id }, req.body);

    res.redirect("back");
  } catch (err) {
    res.status(500).render("500.ejs", {
      pageTitle: "Error !",
      message: err.message,
    });
  }
};

const deleteTask = async (req, res, next) => {
  try {
    await Task.deleteOne({ _id: req.params.id });

    res.redirect("back");
  } catch (err) {
    res.status(500).render("500.ejs", {
      pageTitle: "Error !",
      message: err.message,
    });
  }
};

module.exports = {
  getAllTasks,
  getTaskDetail,
  postNewTask,
  handleFormAction,
  updateTask,
  deleteTask,
};
