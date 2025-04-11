require('dotenv').config(); // Load environment variables
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// --- MIDDLEWARE ---
app.use(cors());
app.use(express.json()); // Parse JSON request bodies

// --- ROUTES ---
app.use('/api/auth', authRoutes);

// --- ROOT ROUTE ---
app.get('/', (req, res) => {
  res.send('🚀 Welcome to the BecureAI API');
});

// --- DATABASE CONNECTION & SERVER START ---
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('✅ Connected to MongoDB');
  app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
})
.catch((err) => {
  console.error('❌ Failed to connect to MongoDB:', err.message);
  process.exit(1); // Exit the process if DB connection fails
});




