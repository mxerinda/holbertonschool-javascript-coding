#!/usr/bin/node
// starwars count of id 18

const request = require('request');

const url = process.argv[2];

if (url !== undefined) {
  request(url, function (err, response, body) {
    if (err) console.log(err);
    let allMovies = JSON.parse(body).results;
    let counter = 0;
    for (let i = 0; i < allMovies.length; i++) {
      if (allMovies[i].characters.includes('https://swapi.co/api/people/18/')) counter++;
    }
    console.log(counter);
  });
}
