#!/usr/bin/node
// store webpage on file

const fs = require('fs');
const request = require('request');

const fileName = process.argv[3];
const url = process.argv[2];

if (fileName !== undefined || url !== undefined) {
  request(url, function (err, response, body) {
    if (err) {
      console.log(err);
      return;
    }
    fs.writeFile(fileName, body, 'utf-8', function (err) {
      if (err) console.log(err);
    });
  });
}
