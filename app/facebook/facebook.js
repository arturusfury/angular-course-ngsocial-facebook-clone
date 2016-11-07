'use strict';

angular.module('ngSocial.facebook', ['ngRoute', 'ngFacebook'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/facebook', {
    templateUrl: 'facebook/facebook.html',
    controller: 'FacebookCtrl'
  });
  $facebookProvider.setAppId('1811866962360825');
  $facebookProvider.setPermissions('email', 'public_profile', 'user_posts', 'publish_actions', 'user_photos');
}])

.run(function($rootScope) {
  // Cut and paste the "Load the SDK" code from the facebook javascript sdk page.
  (function(d, s, id){
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) {return;}
       js = d.createElement(s); js.id = id;
       js.src = "//connect.facebook.net/en_US/sdk.js";
       fjs.parentNode.insertBefore(js, fjs);
     }(document, 'script', 'facebook-jssdk'));
})

.controller('FacebookCtrl', [function() {

}]);
