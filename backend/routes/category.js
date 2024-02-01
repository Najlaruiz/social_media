const express = require("express");
const router = express.Router();

const {
  addCategory,
  getCategory,
  updateCategory,
  showAllCategories,
  dealOfCategory
} = require("../controllers/category.js");

router.post("/", addCategory);
router.put("/:id", updateCategory);
router.get("/all", showAllCategories);
router.get("/:id", getCategory);
router.delete("/dealOfCategory/:id", dealOfCategory);

module.exports = router;