/**
 * Created by dor on 17/07/2016.
 */


// var Mainapp=angular.module('mainApp', [ 'ngAnimate', 'ui.bootstrap','ngSanitize']);

var PagesApp=angular.module('PagesApp', ['ngRoute','angular.filter', 'ngAnimate', 'ui.bootstrap','ngSanitize',
    'btford.markdown']);

PagesApp.config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
        $routeProvider.
        when('/', {
            templateUrl: 'pages/main.html',
            controller: 'mainCtrl'
        }).

        otherwise({
            redirectTo: '/'
        });
    }]);
