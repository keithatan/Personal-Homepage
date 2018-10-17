const express = require('express');
const path = require('path');

const app = express();
/*
const forceSSL = function() {
    return function (req, res, next) {
      if (req.headers['x-forwarded-proto'] !== 'https') {
        return res.redirect(
         ['https://', req.get('Host'), req.url].join('')
        );
      }
      next();
    }
  }
app.use(forceSSL());
*/
app.use(express.static(__dirname, 'dist', {index: false}));


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/src/index.html'));
  });
app.listen(process.env.PORT || 8080);