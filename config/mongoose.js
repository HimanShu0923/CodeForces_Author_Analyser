const mongoose = require('mongoose');
const axios = require('axios');

mongoose.connect('mongodb+srv://HimanShu09:8iVS0LKM8HJVt2zf@cluster0.ttwau.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,

    useUnifiedTopology: true
});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error in connecting to MongoDB'));

db.once('open', () => {
    console.log('Connected to MongoDB successfully');
    axios.get('http://localhost:8080/createDatabase');
});

module.exports = db;