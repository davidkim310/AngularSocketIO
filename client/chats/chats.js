angular.module('AngularSocket.chats', [])
.controller('chatsCtrl', function ($rootScope) {
  $rootScope.messages = []
  $rootScope.sendMessage = function (msg){
    var socket = io.connect('http://localhost:8080')
    socket.emit('chat message', msg)
    socket.on('chat message', function(msg){
      $rootScope.messages.push(msg)
    })
    console.log($rootScope.messages);
  }
})
