#!/usr/bin/node
// completed tasks of all users as object

const request = require('request');

const url = 'https://jsonplaceholder.typicode.com/todos';

request(url, function (err, response, body) {
  const userCompletedTasks = {};

  if (err) {
    console.log(err);
    return;
  }

  let resp = JSON.parse(body);

  for (let i = 0; i < resp.length; i++) {
    if (resp[i].completed === true) {
      if (resp[i].userId in userCompletedTasks) {
        userCompletedTasks[resp[i].userId] += 1;
      } else {
        userCompletedTasks[resp[i].userId] = 1;
      }
    }
  }

  console.log(userCompletedTasks);
});
