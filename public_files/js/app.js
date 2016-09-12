/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider){
    $routeProvider
            .when('/', {
               templateUrl: '../html/main.html',
               controller: 'mainController'
            })
            .when('/aboutus', {
               templateUrl: '../html/aboutus.html',
               controller: 'secondController'
            })
     .when('/contacts', {
               templateUrl: '../html/contacts.html',
               controller: 'secondController'
            })
});

myApp.controller('mainController', ['$scope',function($scope) {
    console.log($scope);
//    $scope.name = 'Hello World!';
}]);
myApp.controller('secondController', ['$scope',function($scope) {
    console.log($scope);
//    $scope.name = 'Hello Again';
}]);


