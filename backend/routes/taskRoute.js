const express = require("express");
const { createTask, getTasks ,getTask, deleteTask,updateTask } = require("../controllers/taskController");
const router = express.Router();

//router.routes("/").get(getTasks).post(createTask);

router.post("/", createTask);
router.get("/", getTasks);
router.get("/:id", getTask);
router.delete("/:id", deleteTask);
router.put("/:id",updateTask);


module.exports = router;