const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
//The above code will work fine if you have express installed globally or locally in your project
//However, If express is installed in a nested folder and you try to run the above code it will not work and you will get the following error
//Error: Cannot find module 'express'