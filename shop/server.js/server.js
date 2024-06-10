// server.js
const express = require('express');
const app = express();
const PORT = 3000;

// Sample data - Replace with database later
let products = [
  { id: 1, name: 'Product 1', price: 10.99 },
  { id: 2, name: 'Product 2', price: 20.99 },
  { id: 3, name: 'Product 3', price: 15.99 }
];

// Define routes
app.get('/products', (req, res) => {
  res.json(products);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
