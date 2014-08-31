'use strict';

angular.module('Menu.directives', [])
  .directive('fbTopnav', function () {
      return {
          templateUrl: './src/common/directives/Menu/TopNav.html',
          restrict: 'AE'
      };
    });
