var express = require('express');
var app = express();
const http = require('http').Server(app);
var path = require('path')
var io = require('socket.io')(http)
var port = process.env.PORT || 8080;
//io calls

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
  socket.on('chat message', function(msg){
    io.emit('chat message server', msg)
    console.log('chat message', msg);
  })
});
http.listen(port, function(){
  console.log('server started: http://localhost:' + port + '/')
})

app.use(express.static('./client'))

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../client', 'index.html'))
})
