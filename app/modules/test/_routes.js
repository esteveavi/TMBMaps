'use strict';

var testModule = angular
    .module('testModule');

testModule.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/test/foundation5', {
        templateUrl: 'modules/test/views/testFoundation5.html',
        controller: 'testFoundation5Ctrl'
      }).
      when('/test/angularjs', {
        templateUrl: 'modules/test/views/testAngularJS.html',
        controller: 'testAngularJSCtrl'
      }).
      when('/test/ol3', {
        templateUrl: 'modules/test/views/testol3.html',
        controller: 'testol3Ctrl'
      })
    ;
  }]);