angular.module('AngularSocket.chats', [])
.controller('chatsCtrl', function ($scope, $window) {
  var socket = io.connect($window.location.origin)
  $scope.messages = []

  $scope.sendMessage = function (){
    socket.emit('chat message', {message: $scope.value})
    console.log('scopevalue: ', $scope.value);
  }
  socket.on('chat message server', function(msg) {
    console.log('msg: ', msg);
    $scope.$apply(function(){
      $scope.messages.push(msg.message)
      console.log($scope.messages);
    })
  })


})
