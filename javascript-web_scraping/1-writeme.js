#!/usr/bin/env node
// write to file

const fs = require('fs');

const fileName = process.argv[2];
const fileString = process.argv[3];

if (fileName === undefined || fileString === undefined) {
} else {
  fs.writeFile(fileName, fileString, 'utf8', function (err) {
    if (err) console.log(err);
  });
}
