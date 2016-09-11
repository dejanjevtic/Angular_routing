
      var countryApp = angular.module('countryApp', ['ngRoute']);
      countryApp.config(function($routeProvider) {
        $routeProvider. 
           when('/', {
             templateUrl: 'template/country_list.html',
             controller: 'CountryListController'
           }).
           when('/:countryName', {
             templateUrl: 'template/country_detail.html',
             controller: 'CountryDetailController'
           }).
           otherwise({
             redirectTo: '/'
           });
        });
      countryApp.controller('CountryListController', function ($scope, $http){
        $http.get('data/data.json').success(function(data) {
              $scope.countries = data;
            });
      });
      countryApp.controller('CountryDetailController', function ($scope, $routeParams, $http){
        $scope.name = $routeParams.countryName;

        $http.get('data/data.json').success(function(data) {
          $scope.country = data.filter(function(entry){
            return entry.name === $scope.name;
          })[0];         
        });
      });