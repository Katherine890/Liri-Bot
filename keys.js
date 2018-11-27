require("dotenv").config();
console.log('this is loaded');

//Spotify = require('node-spotify-api');
 

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};

//id: process.env.4990777904cf4185962184e74a762e15,
//secret: 243707e5a2154321a2b43648b9f8b817


//Spotify = require('node-spotify-api');