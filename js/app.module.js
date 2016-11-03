/**
 * Created by dor on 17/07/2016.
 */


// var Mainapp=angular.module('mainApp', [ 'ngAnimate', 'ui.bootstrap','ngSanitize']);

var PagesApp=angular.module('PagesApp', ['ngRoute','angular.filter', 'ngAnimate', 'ui.bootstrap','ngSanitize',
    'btford.markdown']);

    PagesApp.run(function($rootScope, $location, $anchorScroll) {
      //when the route is changed scroll to the proper element.
      $rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
        if($location.hash()) $anchorScroll();
      });
    });

PagesApp.config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
        $routeProvider.
        when('/', {
            templateUrl: 'pages/main.html',
            controller: 'mainCtrl'
        }).
        when('/team', {
            templateUrl: 'pages/team.html',
            controller: 'teamCtrl'
        }).
        when('/dataset', {
            templateUrl: 'pages/dataset.html',
            controller: 'datasetCtrl'
        }).
        when('/download', {
            templateUrl: 'pages/download.html',
            controller: 'downloadCtrl'
        }).
        otherwise({
            redirectTo: '/'
        });
    }]);
