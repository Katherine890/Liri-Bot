# liri-node-app

## Overview
Liri is an app that is similar to Apple's virtual assistant Siri. 
While Siri responds to voice recognition, Liri responds to language.


## Using the App
Liri responds to four commands: *concert-this*, *spotify-this-song*, *movie-this* and *do what it says*.

**concert-this**: Using the Bands In Town api, Liri will find information on the name of the venue, the location, and the date of the event according to the artist or bad you search for.

**spotify-this-song**: Using the spotify api, Liri will find information from Spotify on the artist, the song's name, a preview link of the song, and the song's album (Default if no song is typed is "The Sign" by Ace of Base).

**movie-this**: Using the omdb api, Liri will find information on the movie title, year the movie came out, IMDb rating, Rotten Tomatoes rating, country where the movie was produced, language of the movie, plot of the movie, and actors of the movie (Default if no movie is typed is Mr. Nobody).

**do-what-it-says**: Using the file system package, Liri will take any text that is typed into a random.txt file and use that to call Liri's command. 


 ## Why is it useful?
 Liri is a great app for users who want to find quick information on a song, upcoming concerts, or a movie. It is for those who might be spontaneous and want to discover new media or details about a song or which album the song belongs to. Some may be curious about which actors were a part of a certain movie or when and where their favorite band will perform next.


## Getting Started
Users may get started by first typing in to the command line "node liri.js" and then one of the four commands (for example "movie-this"). Following is the name of the movie. By pressing enter, Liri will display the information on that specific movie.

Example: "node liri.js movie-this TRON"

         "node liri.js concert-this Drake"

         "node liri.js spotify-this-song Redbone"

         "node liri.js do-what-it-says movie-this"
 



## Links
[GitHub](https://github.com/Katherine890/liri-node-app)

## DEMO
CONCERT: https://drive.google.com/file/d/1PpzdtkQOQJNgUJ-pQ_dOv9IYz4g9gDu1/view
SPOTIFY: https://drive.google.com/file/d/1uvkMeL4M-uzCul7izvN1eBrIMv1IAWa3/view
MOVIE: https://drive.google.com/file/d/1q0EZij7-LZpajBLE1rat5lRyPhErz91X/view

DO-WHAT-IT-SAYS: https://drive.google.com/file/d/1o-UaCHq48y3tjcVaCTIIPfz4KoUvFQYq/view