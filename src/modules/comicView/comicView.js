/*
angular.module('myApp.comicView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/comicView', {
    templateUrl: 'modules/comicView/comicView.html',
    controller: 'gController'
  });
}])
	 $http.get('https://www.mangaeden.com/api/list/0/').then(function(response) {
 */

 'use strict';

angular.module('myApp.comics', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/comicView', {
    templateUrl: 'modules/comicView/comicView.html',
    controller: 'comicCtrl'
  });
  /*.when('/photos/:id', {
    templateUrl: 'modules/galleryView//galleryDetailsView.html',
      controller: 'galleryDetailsCtrl'
    });*/
}])

.controller('comicCtrl', ['$scope', 'comicDetails', function($scope, comics) {
  comics.success(function(data) {
    $scope.comics = data;
  });
}])

/*.controller('galleryDetailsCtrl', ['$scope', 'comicdetails', '$routeParams', function($scope, photos, $routeParams) {
  photos.success(function(data) {
    $scope.detail = data[$routeParams.id];
  });
}])*/

.factory('comicDetails', ['$http', function($http) {
  return $http.get('https://www.mangaeden.com/api/manga/4e70e9f6c092255ef7004336/')
         .success(function(data) {
           return data;
         })
         .error(function(data) {
           return data;
         });
}]);

