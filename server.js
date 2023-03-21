// var express = require('express')
// var app = express()


// //__dirname an environment variable that displays 
// //the full path to the directory where the active file is located. .
// //Rerfernce from https://www.geeksforgeeks.org/difference-between-__dirname-and-in-node-js/
// //https://www.youtube.com/watch?v=l8wooO1nh70
// app.get('/', (req, res) => {
//   res.sendFile( __dirname +  '/index.html');
// });

// //list to a particular port
// app.listen(3000)
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(3030, () => {
  console.log('Server listening on port 3030');
});