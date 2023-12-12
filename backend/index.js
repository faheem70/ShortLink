
const express = require('express');

const axios = require('axios');
const bodyParser = require('body-parser');
const router = require('./routes/userRoutes');
const shortLink = require("./routes/shortLinkRoutes")
const path = require("path");
const app = express();
const cors = require('cors');
const port = 4000;
require('./Database/database');

app.use(bodyParser.json());
app.use(cors({
    origin: ['https://shortid-91yj.onrender.com'],
}));

app.use('/api/v1', router);
app.use('/api/v1', shortLink);



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
