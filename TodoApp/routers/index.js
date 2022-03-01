const express = require("express");
const router = express.Router();

const homeController = require("../controllers/home_controller");

router.get("/",homeController.home);
router.get("/task_list", homeController.addTask);
router.get("/delete_list", homeController.deleteTask);

module.exports = router;