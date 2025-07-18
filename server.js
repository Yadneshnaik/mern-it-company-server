const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.error('❌ MongoDB connection error:', err));

const serviceRoutes = require('./routes/serviceRoutes');
const contactRoutes = require('./routes/contactRoutes');
const webDevRoutes = require('./routes/webDevRoutes');
const planBookingRoutes = require('./routes/planBookingRoutes');
const ourStoryRoutes = require('./routes/ourStoryRoutes');
const teamRoutes = require('./routes/teamRoutes');

app.use('/api/services', serviceRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/web-development', webDevRoutes);
app.use('/api/book-plan', planBookingRoutes);
app.use('/api/our-story', ourStoryRoutes);
app.use('/api/team', teamRoutes);

app.get('/', (req, res) => res.send('API is running...'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
