const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World!');
});
//To fix this error install express in the root of the project
//This is necessary if express is installed in a nested folder
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});