const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    balance: {
      type: Number,
      default: 0
    },
    accountType: {
      type: String,
      enum: ["Checking", "Savings", "Credit Card"],
      default: "Checking"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Account", accountSchema);
