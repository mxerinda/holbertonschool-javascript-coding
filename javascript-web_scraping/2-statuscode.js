#!/usr/bin/node
// get status code

const request = require('request');

const url = process.argv[2];

if (url !== undefined) {
  request(url, function (err, response) {
    if (err) console.log(err);
    console.log('code: ' + response.statusCode);
  });
}
