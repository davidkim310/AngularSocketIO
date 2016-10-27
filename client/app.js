angular.module('AngularSocket', ['ui.router', 'AngularSocket.chats'])

.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/')

  $stateProvider
  .state('chats', {
    url: '/chats',
    templateUrl: 'chats/chats.html',
    controller: 'chatsCtrl'
  })
})

// .factory('chatsFactory', function($http){
//   let submit = function(msg){
//     console.log('inside chatsFactory', msg)
//
//   }
//   return {
//     submit: submit
//   }
// })
