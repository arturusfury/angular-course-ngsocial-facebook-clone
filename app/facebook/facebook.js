'use strict';

angular.module('ngSocial.facebook', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/facebook', {
    templateUrl: 'facebook/facebook.html',
    controller: 'FacebookCtrl'
  });
}])

.controller('FacebookCtrl', [function() {

}]);
