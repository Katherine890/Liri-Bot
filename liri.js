require('dotenv').config();
var request = require('request');
Spotify = require('node-spotify-api');
var fs = require('file-system');
var moment = require('moment');



// BANDS IN TOWN: CONCERTS //


var Events = function (artist) {
  request('https://rest.bandsintown.com/artists/' + artist + '/events?app_id=codingbootcamp&date=upcoming',
   function (error, response, data) {
      console.log('error:', error); // Print the error if one occurred
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
     // console.log('body:', body);
     
      var jsonData = JSON.parse(data);
      
      console.log('Venue: ' + jsonData[0].venue.name);
      console.log('Location: ' + jsonData[0].venue.city + ", " + jsonData[0].venue.region);

      console.log('Date: ' + moment(jsonData[0].datetime).format('L'));
    
    });
}


// SPOTIFY: SONGS //

var getArtistNames = function (artist) {
  return artist.name;
}
var getMeSpotify = function (songName) {

  var keys = require('./keys');
  var spotify = new Spotify(keys.spotify);

  spotify.search({
    type: 'track',
    query: songName
  }, function (err, data) {
    if (err) {
      console.log('Error occurred: ' + err);
      return;
    }

    var songs = data.tracks.items;
    for (var i = 0; i < songs.length; i++) {
      console.log(i);
      console.log('artist(s): ' + songs[i].artists.map(
        getArtistNames));
      console.log('song name: ' + songs[i].name);
      console.log('preview link: ' + songs[i].preview_url);
      console.log('album: ' + songs[i].album.name);
      console.log('----------------------------------------')

    }
  });

}

// OMDB: MOVIES //
var getMovie = function (movieName) {
  request('http://www.omdbapi.com/?apikey=trilogy&t=' + movieName + '&y=&plot=short&r=json',
    function (error, response, body) {
      console.log('error:', error); // Print the error if one occurred
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    

      var jsonData = JSON.parse(body);

      console.log('Title:' + jsonData.Title);
      console.log('Year:' + jsonData.Year);
      console.log('IMDb Rating:' + jsonData.imdbRating);
      console.log('Rotten Tomatoes Rating:' + jsonData.tomatoRating);
      console.log('Country:' + jsonData.Country);
      console.log('Language:' + jsonData.Language);
      console.log('Plot' + jsonData.Plot);
      console.log('Actors:' + jsonData.Actors);

    });

}


// DO WHAT IT SAYS
var doWhatItSays = function () {
  fs.readFile('random.txt', 'utf8', function (err, data) {
    if (err) throw err;

    var dataArr = data.split(',');

    if (dataArr.length == 2) {
      pick(dataArr[0], dataArr[1]);
    } else if (dataArr.length == 1) {
      pick(dataArr[0]);
    }

  });

}



// LIRI COMMANDS //
var pick = function (caseData, functionData) {
  switch (caseData) {
    case 'concert-this':
      Events(functionData);
      break;
    case 'spotify-this-song':
      getMeSpotify(functionData);
      break;
    case 'movie-this':
      getMovie(functionData);
      break;
    case 'do-what-it-says':
      doWhatItSays();
      break;
    default:
      console.log('LIRI does not know that');
  }
}

var runThis = function (argOne, argTwo) {
  pick(argOne, argTwo);
};

runThis(process.argv[2], process.argv[3]);

