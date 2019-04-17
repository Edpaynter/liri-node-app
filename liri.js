require("dotenv").config();
require("fs")
var axios = require("axios")

var keys = require("./keys.js")
var Spotify = require('node-spotify-api');
 
var bandsintown = require('bandsintown')
var omdb = require('omdb');
var user = process.argv[2]
var searchTerm = process.argv.slice(3).join(" ")

console.log(user)    

if(user === "spotify-this-song"){
var spotify = new Spotify(keys.spotify);
 
spotify.search({ type: 'track', query: searchTerm, limit: 1}, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }

console.log(data.tracks.items[0].album.artists[0].external_urls.spotify)
console.log(data.tracks.items[0].album.name)
console.log(data.tracks.items[0].name);
console.log(data.tracks.items[0].album.artists[0].name); 
});
}

if (user === "concert-this"){
bandsintown
axios.get("https://rest.bandsintown.com/artists/" + searchTerm + "/events?app_id=codingbootcamp")
  .then(function(response) {
    console.log(response.data[0].venue.name)
    console.log(response.data[0].venue.city + ", " + response.data[0].venue.country)
    console.log(response.data[0].datetime)

  });
}


if(user === "movie-this"){

var movieName = searchTerm;
if (movieName === ""){
  movieName = "Mr. Nobody"
}

var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

console.log(queryUrl);

axios.get(queryUrl).then(
  function(response) {
    console.log(response.data.Title)
    console.log("Release Year: " +  response.data.Year)
    console.log(response.data.Rated)
    console.log(response.data.Ratings[1].Value)
    console.log(response.data.Country)
    console.log(response.data.Language)
    console.log(response.data.Plot)
    console.log(response.data.Actors);
  }
);

}