const mongoose = require('mongoose');
const url = "mongodb://localhost:27017/yourDatabaseName"
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind("Error"));

db.once('open', () => {
    console.log("Connted to the databse");
})


module.exports = mongoose;