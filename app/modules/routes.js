'use strict';

var TMBMaps = angular
    .module('TMBMaps')
    .config(
        ['$routeProvider', '$locationProvider',
            function ($routeProvider, $locationProvider) {
                //Enable HTML5 mode
                $locationProvider.html5Mode(false);
                
                //Set default route
                //$routeProvider.otherwise({
                //    redirectTo: '/'
                //});
                    
            }
        ]
    )  
;
