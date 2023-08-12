const router = require("express").Router();
const KPI = require("../models/KPI.js");

router.get("/", async (req, res, next) => {
  try {
    const kpisData = await KPI.find();
    return res.status(200).json(kpisData);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

module.exports = router;
