'use strict';

var testModule = angular.module('testModule');

testModule.controller('testol3Ctrl', function ($scope) {

    angular.extend($scope, {
        london: {
            lat: 51.505,
            lon: -0.09,
            zoom: 4
        }
    });
    

});


