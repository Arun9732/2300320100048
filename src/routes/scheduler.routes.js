const express = require("express");

const {
    getBestSchedule
} = require("../controllers/scheduler.controller");

const router = express.Router();

router.get("/schedule", getBestSchedule);

module.exports = router;