# Money Manager Backend

A Node.js/Express backend server for the Money Manager application, providing REST APIs for managing financial transactions.

## Features

- **Transaction Management**: Create, read, update, and delete income/expense transactions
- **Filtering**: Filter transactions by type, category, division, and date range
- **Statistics**: Get monthly and category-wise summaries
- **12-Hour Edit Window**: Transactions can only be edited within 12 hours of creation
- **MongoDB Integration**: Persistent data storage with MongoDB Atlas

## Project Structure

```
src/
├── config/
│   └── db.js              # Database connection configuration
├── controllers/
│   └── transactionController.js  # Request handlers
├── models/
│   ├── Transaction.js     # Transaction schema
│   └── Account.js         # Account schema
├── routes/
│   └── transactions.js    # API routes
└── server.js              # Main server file
```

## Environment Variables

Create a `.env` file in the root directory:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/money-manager
NODE_ENV=development
```

## Installation

```bash
npm install
```

## Running the Server

```bash
npm start
```

Server will start on `http://localhost:5000`

## API Endpoints

### Transactions

- **GET** `/api/transactions` - Get all transactions
  - Query parameters: `type`, `category`, `division`, `startDate`, `endDate`
  
- **POST** `/api/transactions` - Create a new transaction
  
- **GET** `/api/transactions/:id` - Get a specific transaction
  
- **PUT** `/api/transactions/:id` - Update a transaction (only within 12 hours)
  
- **DELETE** `/api/transactions/:id` - Delete a transaction
  
- **GET** `/api/transactions/summary/category` - Get category-wise summary
  
- **GET** `/api/transactions/stats/monthly` - Get monthly statistics

## Transaction Schema

```javascript
{
  type: "Income" | "Expense",      // Required
  amount: Number,                   // Required
  category: String,                 // Required, e.g., "Salary", "Food"
  description: String,              // Required
  division: "Personal" | "Office",  // Default: Personal
  date: Date,                       // Default: current date
  createdAt: Date,                  // Auto-generated
  updatedAt: Date                   // Auto-generated
}
```

## Technologies Used

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **Dotenv** - Environment variables
- **CORS** - Cross-Origin Resource Sharing

## Notes

- Edit restriction: Transactions cannot be edited after 12 hours
- All transactions are sorted by date in descending order
- Filtering is flexible and can be combined
