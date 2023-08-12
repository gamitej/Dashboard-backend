const router = require("express").Router();

router.get("/", async (req, res, next) => {
  try {
    const kpisData = await KPI.find();
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

module.exports = router;
