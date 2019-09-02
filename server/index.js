const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const apiRoutes = require('./routes');
const app = express();

const router = express.Router();

dotenv.config();
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

app.use(cors({
  origin: '*',
  optionsSuccessStatus: 200
}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router.use('/api', apiRoutes);

router.use(express.static(path.join(__dirname, '/../client/build')));

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/../client/build', 'index.html'));
});

app.use(router);

const port = process.env.PORT || 3000; //TODO delete?
app.listen(port, function() {
  console.log(`Server is now listening on port ${port}`);
})