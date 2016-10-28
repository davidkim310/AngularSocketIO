angular.module('AngularSocket.chats', [])
.controller('chatsCtrl', function ($scope) {
  $scope.messages = []
  var socket = io.connect('http://localhost:8080')
  $scope.sendMessage = function (msg){
    socket.emit('chat message', msg)
  }
  socket.on('chat message server', function(msg) {
    $scope.$apply(function(msg){
      console.log(msg);
      $scope.messages.push(msg.value)
      console.log($scope.messages);
    })
  })
})
