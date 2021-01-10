const mongoose = require('mongoose');

mongoose.set('debug', true)

const db = process.env.MONGO_DB_TEST_CONN;
mongoose.connect(db, {
   useNewUrlParser: true,
   useUnifiedTopology: true
})
.then(() => console.log("DB Server is connected."))
.catch(err => console.log('Database has failed to connect. Here\'s the error: ', err));

module.exports.Lyric = require('./lyrics');