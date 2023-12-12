const mongoose = require('mongoose');
const url = "mongodb+srv://shortLink1:ShortLink123@cluster0.uihjk1o.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind("Error"));

db.once('open', () => {
    console.log("Connted to the databse");
})


module.exports = mongoose;