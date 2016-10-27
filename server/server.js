var express = require('express');
var app = express();
const http = require('http').Server(app);
var path = require('path')
var io = require('socket.io')(http)
var port = process.env.PORT || 8080;
io.on('connection', function(socket){
  console.log('a user connected');
})
http.listen(port, function(){
  console.log('server started: http://localhost:' + port + '/')
})

app.use(express.static('./client'))

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../client', 'index.html'))
})
