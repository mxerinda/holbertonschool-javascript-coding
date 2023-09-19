#!/usr/bin/node
// starwars title

const request = require('request');

const title = process.argv[2];
const url = 'http://swapi.co/api/films/';

if (title !== undefined) {
  request(url + title, function (err, response, body) {
    if (err) console.log(err);
    console.log(JSON.parse(body)['title']);
  });
}
