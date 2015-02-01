'use strict';

angular
  .module('TMBMaps')
  .config(function(
    $stateProvider,
    $urlRouterProvider
  ) {

    $urlRouterProvider.otherwise('/');
  })
;
