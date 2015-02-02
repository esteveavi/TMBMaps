'use strict';

/**
 * @ngdoc overview
 * @name ociCore
 * @description
 * # ociCore
 *
 * Main module of the application.
 */
angular
  .module('TMBMaps', [

    'ngAnimate',
    'ngSanitize',
    'ngTouch',
    'ngRoute',

    'cfp.hotkeys',
    'restangular',
    'ui.keypress',
    'ui.router',
    
    'openlayers-directive',
    
    'testModule'
  ]);


