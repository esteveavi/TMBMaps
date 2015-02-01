'use strict';

var testModule = angular.module('testModule');

testModule.controller('testCtrl', function ($scope, $compile) {
  $scope.phones = [
    {'name': 'Nexus S',
     'snippet': 'Fast just got faster with Nexus S.'},
    {'name': 'Motorola XOOM™ with Wi-Fi',
     'snippet': 'The Next, Next Generation tablet.'},
    {'name': 'MOTOROLA XOOM™',
     'snippet': 'The Next, Next Generation tablet.'}
  ];
    
    $scope.halo = 'hhhhhh';
    $scope.call = function () {
        alert("called");
    };
    var map = init();
    var template = "<div><span>{{halo}}</span><button ng-click='call()'>call</button></div>";
    
    
    
});



function init() {
    var map = new ol.Map({
    target: 'map',
    layers: [
      new ol.layer.Tile({
        source: new ol.source.MapQuest({layer: 'sat'})
      })
    ],
    view: new ol.View({
      center: ol.proj.transform([37.41, 8.82], 'EPSG:4326', 'EPSG:3857'),
      zoom: 4
    })
    });
    return map;
}