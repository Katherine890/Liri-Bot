require("dotenv").config();

//var spotify = new Spotify(keys.spotify);

var request = require('request');
request("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp", function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});

// Take in the command line arguments
var concertThis = "concert-this"
var artist = process.argv[3];

var name = artist + concertThis;

// Then use the geocoder object to search the address
artist.request(name, function(err, data) {

  console.log(JSON.stringify(data, null, 2));
});