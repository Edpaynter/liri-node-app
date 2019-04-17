require("dotenv").config();
require("fs")
require("axios")

var keys = require("./keys.js")
var user = process.argv[2]
var searchTerm = process.argv.slice(3).join(" ")

console.log(user)    

// var Spotify = require('node-spotify-api');
 
// var spotify = new Spotify(keys.spotify);
 
// spotify.search({ type: 'track', query: searchTerm, limit: 1}, function(err, data) {
//   if (err) {
//     return console.log('Error occurred: ' + err);
//   }

// console.log(data.tracks.items[0].album.artists[0].external_urls.spotify)
// console.log(data.tracks.items[0].album.name)
// console.log(data.tracks.items[0].name);
// console.log(data.tracks.items[0].album.artists[0].name); 
// });

omdb.search('saw', function(err, movies) {
  if(err) {
      return console.error(err);
  }

  if(movies.length < 1) {
      return console.log('No movies were found!');
  }

  movies.forEach(function(movie) {
      console.log('%s (%d)', movie.title, movie.year);
  });

  // Saw (2004)
  // Saw II (2005)
  // Saw III (2006)
  // Saw IV (2007)
  // ...
});

omdb.get({ title: searchTerm}, true, function(err, movie) {
  if(err) {
      return console.error(err);
  }

  if(!movie) {
      return console.log('Movie not found!');
  }

  console.log('%s (%d) %d/10', movie.title, movie.year, movie.imdb.rating);
  console.log(movie.plot);


});