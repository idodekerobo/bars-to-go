// Lyrics Schema
const mongoose = require('mongoose');
const LyricSchema = new mongoose.Schema({
   lyric: {
      type: String,
      trim: true,
      required: 'Put the lyric in the text box'
   },
   spotifyUrl: String,
   appleMusicUrl: String,
})

const Lyric = mongoose.model('Lyric', LyricSchema);
module.exports = Lyric;