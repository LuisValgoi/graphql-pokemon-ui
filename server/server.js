const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3000;
const server = express();
const FRONTEND_BUILD = path.join(__dirname, '../build');

console.log('[LOG]' + __dirname);
server.use(express.static(FRONTEND_BUILD));
server.get('/*', function (_, res) {
  res.setHeader('Cache-Control', 'no-cache,no-store,max-age=0,must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '-1');
  res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');

  res.sendFile(path.join(FRONTEND_BUILD, 'index.html'));
});

console.log('[LOG] Listening on port: ' + PORT);
server.listen(PORT);
