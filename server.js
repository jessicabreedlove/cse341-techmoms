const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Jessica Reece - Tech Moms');
});

app.listen(port, () => {
  console.log(`You have connected and listening on port ${port}`);
});
