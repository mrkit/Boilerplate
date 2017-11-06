const express = require('express'),
      app = express(),
      path = require('path'),
      morgan = require('morgan'),
      bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, '..', 'client', 'public')))

app.get('/', (req, res, next)=> {
  res.sendFile(path.join(__dirname, '..', 'client', 'public', 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, console.log(`listening on port ${port}`));