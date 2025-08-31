const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());

// A simple API route
app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
