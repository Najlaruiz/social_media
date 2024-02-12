const express = require("express");
const router = express.Router();

const {
  addCategory,
  getCategory,
  updateCategory,
  showAllCategories,
  dealeteCategory
} = require("../controllers/category.js");

router.post("/", addCategory);
router.put("/:id", updateCategory);
router.get("/all", showAllCategories);
router.get("/:id", getCategory);
router.delete("/dealeteCategory/:id", dealeteCategory);

module.exports = router;