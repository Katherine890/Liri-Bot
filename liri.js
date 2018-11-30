require('dotenv').config();
var request = require('request');
Spotify = require('node-spotify-api');
var fs = require('file-system');

// BANDS IN TOWN //


//set options for instance
//app_id and artists are required





var Events = function (artist) {
  request('https://rest.bandsintown.com/artists/' + artist + '/events?app_id=codingbootcamp&date=upcoming',
    function (error, response, body) {
      console.log('error:', error); // Print the error if one occurred
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      console.log('body:', body);

      var BandsInTownEvents = require('bandsintown-events');
      var Events = new BandsInTownEvents(); 
      Events.setParams({
        'app_id': 'codingbootcamp', //can be anything
        'artists': ['Drake']
      })

      //var bands = event.venue.name;
     // for (var i = 0; i < bands.length; i++) {
       // console.log(i);
       // console.log('Venue: ' + bands[i].venue.name);
       // console.log('Location: ' + bands[i].city + ',' + bands[i].venue.region);
       // console.log('Date: ' + bands[i].event.datetime);


        //get your events with success and error callbacks
         Events.getEvents(function( events ) {
         for(var i = 0; i < events.length; i++){
            console.log( events[i].venue.city + ', ' + events[i].venue.region );
         }
          },function( errors ){
           console.log(errors);
          });

        // var jsonData = JSON.parse(body);

        // console.log('Venue:' + jsonData.venue.name);
        // console.log('Location:' + events[i].venue.city + ", " + events[i].venue.region );
        //  console.log('IMDb Rating:' + jsonData.event.datetime);

        //  });

      //}
    });
}


// SPOTIFY //

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

// OMDB //
var getMovie = function (movieName) {
  request('http://www.omdbapi.com/?apikey=trilogy&t=' + movieName + '&y=&plot=short&r=json',
    function (error, response, body) {
      console.log('error:', error); // Print the error if one occurred
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      // console.log('body:', body); // Print the HTML for the Google homepage.

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

