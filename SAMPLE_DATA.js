// Sample data for Money Manager - Run this in MongoDB to populate test data
// Use MongoDB Compass or mongosh to run these commands

// Clear existing data (optional)
db.transactions.deleteMany({});

// Insert sample transactions
db.transactions.insertMany([
  {
    type: "Income",
    amount: 50000,
    category: "Salary",
    description: "Monthly salary from employer",
    division: "Personal",
    date: new Date("2024-12-01T09:00:00Z"),
    createdAt: new Date("2024-12-01T09:00:00Z"),
    updatedAt: new Date("2024-12-01T09:00:00Z")
  },
  {
    type: "Income",
    amount: 5000,
    category: "Bonus",
    description: "Performance bonus",
    division: "Personal",
    date: new Date("2024-12-05T10:30:00Z"),
    createdAt: new Date("2024-12-05T10:30:00Z"),
    updatedAt: new Date("2024-12-05T10:30:00Z")
  },
  {
    type: "Expense",
    amount: 2000,
    category: "Food",
    description: "Monthly grocery shopping",
    division: "Personal",
    date: new Date("2024-12-03T14:20:00Z"),
    createdAt: new Date("2024-12-03T14:20:00Z"),
    updatedAt: new Date("2024-12-03T14:20:00Z")
  },
  {
    type: "Expense",
    amount: 5000,
    category: "Fuel",
    description: "Fuel for office car",
    division: "Office",
    date: new Date("2024-12-04T08:15:00Z"),
    createdAt: new Date("2024-12-04T08:15:00Z"),
    updatedAt: new Date("2024-12-04T08:15:00Z")
  },
  {
    type: "Expense",
    amount: 500,
    category: "Movie",
    description: "Movie tickets for family",
    division: "Personal",
    date: new Date("2024-12-06T19:45:00Z"),
    createdAt: new Date("2024-12-06T19:45:00Z"),
    updatedAt: new Date("2024-12-06T19:45:00Z")
  },
  {
    type: "Expense",
    amount: 3000,
    category: "Medical",
    description: "Doctor consultation and medicines",
    division: "Personal",
    date: new Date("2024-12-07T11:00:00Z"),
    createdAt: new Date("2024-12-07T11:00:00Z"),
    updatedAt: new Date("2024-12-07T11:00:00Z")
  },
  {
    type: "Expense",
    amount: 10000,
    category: "Loan",
    description: "EMI payment for home loan",
    division: "Personal",
    date: new Date("2024-12-08T09:30:00Z"),
    createdAt: new Date("2024-12-08T09:30:00Z"),
    updatedAt: new Date("2024-12-08T09:30:00Z")
  },
  {
    type: "Expense",
    amount: 500,
    category: "Utilities",
    description: "Electricity bill",
    division: "Personal",
    date: new Date("2024-12-09T10:00:00Z"),
    createdAt: new Date("2024-12-09T10:00:00Z"),
    updatedAt: new Date("2024-12-09T10:00:00Z")
  },
  {
    type: "Expense",
    amount: 300,
    category: "Transport",
    description: "Taxi fare for office commute",
    division: "Office",
    date: new Date("2024-12-10T08:00:00Z"),
    createdAt: new Date("2024-12-10T08:00:00Z"),
    updatedAt: new Date("2024-12-10T08:00:00Z")
  },
  {
    type: "Expense",
    amount: 2000,
    category: "Shopping",
    description: "Winter clothes and accessories",
    division: "Personal",
    date: new Date("2024-12-11T16:30:00Z"),
    createdAt: new Date("2024-12-11T16:30:00Z"),
    updatedAt: new Date("2024-12-11T16:30:00Z")
  },
  {
    type: "Expense",
    amount: 1500,
    category: "Entertainment",
    description: "Dinner with friends",
    division: "Personal",
    date: new Date("2024-12-12T20:00:00Z"),
    createdAt: new Date("2024-12-12T20:00:00Z"),
    updatedAt: new Date("2024-12-12T20:00:00Z")
  },
  {
    type: "Income",
    amount: 10000,
    category: "Investment",
    description: "Dividend from stocks",
    division: "Personal",
    date: new Date("2024-12-13T11:00:00Z"),
    createdAt: new Date("2024-12-13T11:00:00Z"),
    updatedAt: new Date("2024-12-13T11:00:00Z")
  },
  {
    type: "Expense",
    amount: 3500,
    category: "Food",
    description: "Restaurant expenses for office team lunch",
    division: "Office",
    date: new Date("2024-12-14T12:30:00Z"),
    createdAt: new Date("2024-12-14T12:30:00Z"),
    updatedAt: new Date("2024-12-14T12:30:00Z")
  },
  {
    type: "Expense",
    amount: 800,
    category: "Fuel",
    description: "Fuel for personal car",
    division: "Personal",
    date: new Date("2024-12-15T18:00:00Z"),
    createdAt: new Date("2024-12-15T18:00:00Z"),
    updatedAt: new Date("2024-12-15T18:00:00Z")
  },
  {
    type: "Expense",
    amount: 600,
    category: "Utilities",
    description: "Water and internet bills",
    division: "Personal",
    date: new Date("2024-12-16T09:00:00Z"),
    createdAt: new Date("2024-12-16T09:00:00Z"),
    updatedAt: new Date("2024-12-16T09:00:00Z")
  }
]);

// Verify data was inserted
db.transactions.find().pretty();
