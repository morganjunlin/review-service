const mongoose = require('mongoose');
const model = require('./model.js');
const seeder = require('./seed.js');


require('dotenv').config();

let DB_URL = (process.env.NODE_ENV === 'development') ? 'mongodb://localhost/fec-nordstrom' : `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@nordstrom-ux-cluster-hokx3.mongodb.net/fec-nordstrom?retryWrites=true&w=majority`


mongoose.connect(DB_URL, {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() { console.log('db connected!') });

module.exports = {
  mongoose,
  model,
  seeder
}