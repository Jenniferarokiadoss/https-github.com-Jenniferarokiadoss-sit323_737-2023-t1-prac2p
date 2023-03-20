const express = require('express');
const app = express();


//process.cwd() method is used in Node.js process's active working directory .

//Rerfernce from https://www.youtube.com/watch?v=ObikkECrapg
//https://www.geeksforgeeks.org/node-js-process-cwd-method/
app.get('/', (req, res) => {
  res.sendFile( __dirname +  '/index.html');
});

app.listen(3030, () => {
  console.log('Server listening on port 3030');
});