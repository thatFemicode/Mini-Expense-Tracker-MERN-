//  I will be requiring the model from my model schema
// so as to be able to perform actions on transactions

const Transactions = require("../Model/Transaction");

// Function to get Transactions
const getTransactions = async (req, res) => {
  try {
    const transactions = await Transactions.find();

    return res.status(200).json({
      success: true,
      count: transactions.length,
      data: transactions,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};
const addTransactions = async (req, res) => {
  try {
    const { text, amount } = req.body;

    const transaction = await Transactions.create(req.body);

    return res.status(201).json({
      success: true,
      data: transaction,
    });
  } catch (err) {
    if (err.name === "ValidationError") {
      const messages = Object.values(err.errors).map((val) => val.message);
      return res.status(400).json({
        success: false,
        error: messages,
      });
    } else {
      return res.status(500).json({
        success: false,
        error: "Server Error",
      });
    }
  }
};
const deleteTransactions = async (req, res) => {
  try {
    const transaction = await Transactions.findById(req.params.id);

    if (!transaction) {
      return res.status(404).json({
        success: false,
        error: "No transaction found",
      });
    }

    await transaction.remove();

    return res.status(200).json({
      success: true,
      data: {},
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};
module.exports = {
  getTransactions,
  addTransactions,
  deleteTransactions,
};
