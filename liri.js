require("dotenv").config();

var spotify = new Spotify(keys.spotify);

//var bands = new bands(keys.bands);

//var request = require("request");
//request("http://www.artists.bandsintown.com/bandsintown-api", function (error, response, body) {
 // console.log("error:", error); // Print the error if one occurred
  //console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
  //console.log("body:", body); // Print the HTML for the Google homepage.
//});

// Replace with your mapquest consumer API key
//var options = {
 //provider: "bandsintown",
 // apiKey: "codingbootcamp"
//};

//var artist = request(options);

// Take in the command line arguments
//var artist = process.argv[2];

// Then use the geocoder object to search the address
//artist.request(name, function(err, data) {

  //console.log(JSON.stringify(data, null, 2));
//});



//var queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

// This line is just to help us debug against the actual URL.
//console.log(queryUrl);

//axios.get(queryUrl).then(
  //function(response) {
    //console.log("Release Year: " + response.data.Year);
  //}
//);

//});