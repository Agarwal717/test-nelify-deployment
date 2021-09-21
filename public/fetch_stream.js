// Using Node.js
const https = require('https');
const crypto = require('crypto');
var hostname = 'api.cloud.wowza.com'
var path = '/api/v1.6/stream_targets';
//For security, never reveal API key in client-side code
var wscApiKey = 'DiBCNeUvWFdlaMTnRrqxZvFxY92oRFD3D0tO9e8DnCbZfag3qGDeRa8KdYpD3345';
var wscAccessKey = 'dBQnhXgiY2KRR8DC1r6HGd3guvpkrjAnHOt7tbdrdHNEAqEOQ0bDwTV6tEZW3354';
var timestamp = Math.round(new Date().getTime()/1000);
var hmacData = (timestamp+':'+path+':'+wscApiKey);
var signature = crypto.createHmac('sha256',wscApiKey).update(hmacData).digest('hex')
const options = {
  hostname: hostname,
  path: path,
  headers: {
    'wsc-access-key': wscAccessKey,
    'wsc-timestamp': timestamp,
    'wsc-signature': signature,
    'Content-Type': 'application/json'
  }
};
https.get(options, function(res) {
  var body = '';
  res.on('data', function(data){
    body += data;
  });
  res.on('end', function() {
    console.log(JSON.parse(body));
  });
}).on('error', function(e) {
  console.log(e.message);
});
