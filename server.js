var express = require('express')
var app = express()


//process.cwd() method is used in Node.js process's active working directory.
//Rerfernce from https://www.youtube.com/watch?v=ObikkECrapg
app.get('/', (req, res) => {
  res.sendFile( path.join(process.cwd() ,  '/index.html'));
});

app.listen(3030, () => {
  console.log('Server listening on port 3030');
});