'use strict';

// Declare app level module which depends on views, and components
angular.module('ngSocial', [
  'ngRoute',
  'ngSocial.facebook'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $routeProvider.otherwise({redirectTo: '/facebook'});
}]);
