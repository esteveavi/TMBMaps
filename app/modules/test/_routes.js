'use strict';

var testModule = angular
    .module('testModule');

testModule.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/test', {
        templateUrl: 'modules/test/views/test.html',
        controller: 'testCtlr'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);