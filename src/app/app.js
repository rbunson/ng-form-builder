'use strict';


// Declare app level module which depends on filters, and services
angular.module('myAppModule', [
  'ngRoute',
  'myAppModule.controllers',
  'Menu.directives',
  'FormGeneration.directives',
  'myAppModule.services'
    
]).
config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/entry', { templateUrl: 'src/app/myApp/myApp.tmpl.html', controller: 'myAppCtrl' });
  $routeProvider.otherwise({ redirectTo: '/entry' });
}]);
