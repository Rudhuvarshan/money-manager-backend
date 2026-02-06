const Transaction = require("../models/Transaction");

// Get all transactions with filtering
exports.getTransactions = async (req, res) => {
  try {
    const { type, category, division, startDate, endDate } = req.query;
    const filter = {};

    if (type) filter.type = type;
    if (category) filter.category = category;
    if (division) filter.division = division;

    if (startDate || endDate) {
      filter.date = {};
      if (startDate) filter.date.$gte = new Date(startDate);
      if (endDate) filter.date.$lte = new Date(endDate);
    }

    const data = await Transaction.find(filter).sort({ date: -1 });
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add new transaction
exports.addTransaction = async (req, res) => {
  try {
    const tx = new Transaction(req.body);
    const saved = await tx.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get transaction by ID
exports.getTransactionById = async (req, res) => {
  try {
    const tx = await Transaction.findById(req.params.id);
    if (!tx) return res.status(404).json({ message: "Transaction not found" });
    res.json(tx);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update transaction (only within 12 hours)
exports.updateTransaction = async (req, res) => {
  try {
    const tx = await Transaction.findById(req.params.id);
    if (!tx) return res.status(404).json({ message: "Transaction not found" });

    // Check if 12 hours have passed
    const now = new Date();
    const timeDiff = now - new Date(tx.createdAt);
    const hoursPassed = timeDiff / (1000 * 60 * 60);

    if (hoursPassed > 12) {
      return res.status(403).json({ message: "Cannot edit transaction after 12 hours" });
    }

    // Update fields
    Object.assign(tx, req.body);
    tx.updatedAt = new Date();
    const updated = await tx.save();
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete transaction
exports.deleteTransaction = async (req, res) => {
  try {
    const tx = await Transaction.findById(req.params.id);
    if (!tx) return res.status(404).json({ message: "Transaction not found" });

    await Transaction.findByIdAndDelete(req.params.id);
    res.json({ message: "Transaction deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get summary by category
exports.getSummary = async (req, res) => {
  try {
    const income = await Transaction.aggregate([
      { $match: { type: "Income" } },
      { $group: { _id: "$category", total: { $sum: "$amount" } } }
    ]);

    const expenses = await Transaction.aggregate([
      { $match: { type: "Expense" } },
      { $group: { _id: "$category", total: { $sum: "$amount" } } }
    ]);

    res.json({ income, expenses });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get monthly statistics
exports.getMonthlyStats = async (req, res) => {
  try {
    const stats = await Transaction.aggregate([
      {
        $group: {
          _id: {
            year: { $year: "$date" },
            month: { $month: "$date" },
            type: "$type"
          },
          total: { $sum: "$amount" }
        }
      },
      { $sort: { "_id.year": -1, "_id.month": -1 } }
    ]);
    res.json(stats);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
