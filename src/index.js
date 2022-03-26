const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const { contentRoutes, authRoutes } = require('./Routes');

dotenv.config();

app.use(cors());
app.use(express.json());
const PORT = process.env.PORT;

app.use('/content', contentRoutes);
app.use('/', authRoutes);

app.listen(PORT, () => {
  console.log('listening in port', PORT);
});
