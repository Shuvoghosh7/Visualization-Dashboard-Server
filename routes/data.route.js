const express = require("express");
const dataControllers = require("../controllers/data.controller");

const router = express.Router();

router.get("/data", dataControllers.getAllData);
router.post("/addData", dataControllers.createData)

module.exports = router;