(function(){
'use strict';

angular.module('demo')
       .config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // fallback route
  $urlRouterProvider.otherwise('/');

  // starting routes definition
  $stateProvider

  // Home
  .state('home', {
    url: '/',
    templateUrl: 'pages/home.html'
  })

  // Page1
  .state('page1', {
    url: '/page1',
    templateUrl: 'pages/page1.html'
  })


  // no more route
  ;

};

})()
