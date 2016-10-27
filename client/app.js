angular.module('app', ['ui.router', 'app.chat'
])

.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/')

  $stateProvider
  .state('/chats', {
    url: '/chats',
    templateUrl: 'chats/chats.html',
    controller: 'chatsCtrl'
  })
})
