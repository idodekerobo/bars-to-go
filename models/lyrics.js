// Lyrics Schema
const mongoose = require('mongoose');
const LyricSchema = new mongoose.Schema({
   lyric: {
      type: String,
      trim: true,
      required: 'Put the lyric in the text box'
   },
   songTitle: {
      type: String,
      trim: true,
      required: 'Please put the song title.'
   },
   artistName: {
      type: String,
      trim: true,
      required: 'Please put the artist name.'
   },
   spotifyUrl: String,
   appleMusicUrl: String,
   datePosted: {
      type: Date,
      default: Date.now()
   }
})

const Lyric = mongoose.model('Lyric', LyricSchema);
module.exports = Lyric;