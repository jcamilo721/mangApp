'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.gallery',
  'myApp.view2',
  'myApp.comicView',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {

  $routeProvider
  	.when("/gallery", {
        templateUrl : "modules/galleryView/galleryView.html"
    })
    .when("/view2", {
        templateUrl : "modules/view2/view2.html"
    })
    .when("/comicView", {
        templateUrl : "modules/comicView/comicView.html"
    })
  	.otherwise({redirectTo: '/comicView'});
}]);
