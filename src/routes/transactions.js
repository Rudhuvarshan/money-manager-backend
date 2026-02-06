const express = require("express");
const router = express.Router();

const {
  getTransactions,
  addTransaction,
  getTransactionById,
  updateTransaction,
  deleteTransaction,
  getSummary,
  getMonthlyStats
} = require("../controllers/transactionController");

router.get("/", getTransactions);
router.post("/", addTransaction);
router.get("/summary/category", getSummary);
router.get("/stats/monthly", getMonthlyStats);
router.get("/:id", getTransactionById);
router.put("/:id", updateTransaction);
router.delete("/:id", deleteTransaction);

module.exports = router;
