angular.module('app', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
  
  $stateProvider 
    .state('home', {
      url: '/',
      templateUrl: './views/homeView.html',
      controller: 'homeCtrl'
    })
    .state ('petView', {
      url: '/petView',
      templateUrl: './views/petView.html',
      controller: 'petCtrl'
    })
    .state ('shelterView', {
      url: '/shelterView/:id ',
      templateUrl: './views/shelterView.html',
      controller: 'shelterCtrl'
    })

      $urlRouterProvider.otherwise('/')
})