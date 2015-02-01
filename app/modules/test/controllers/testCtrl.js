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
    var popup = new OpenLayers.Popup.FramedCloud("popup", new OpenLayers.LonLat(103.83641, 1.35578), null, template, null, true);

    map.addPopup(popup);
    var pp = angular.element(document.querySelector('#popup'));
    $compile(pp)($scope);
    
    
});



function init() {
    var map = new OpenLayers.Map('map', {
        projection: new OpenLayers.Projection("EPSG:4326"),
        displayProjection: new OpenLayers.Projection("EPSG:4326"),
        layers: [
        new OpenLayers.Layer.OSM()]
    });
    if (!map.getCenter()) {
        map.zoomToMaxExtent();
    }
    return map;
}