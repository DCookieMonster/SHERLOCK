/**
 * Created by dor on 17/07/2016.
 */


PagesApp.controller('mainCtrl', ['$scope','$http', function($scope,$http) {
    window.scrollTo(0, 0);
    $('.nav-top').removeClass('active');
    $('#home  ').addClass('active');
}]);

PagesApp.controller('teamCtrl', ['$scope','$http', function($scope,$http) {
    window.scrollTo(0, 0);

    $('.nav-top').removeClass('active');
    $('#team').addClass('active');

}]);


PagesApp.controller('datasetCtrl', ['$scope','$http', '$location', '$anchorScroll', function($scope,$http, $location, $anchorScroll) {
    window.scrollTo(0, 0);
    $('.nav-top').removeClass('active');
    $('#dataset').addClass('active');
    $scope.scrollTo = function(id) {
     $location.hash(id);
     $anchorScroll();
  }
}]);


PagesApp.controller('downloadCtrl', ['$scope','$http', function($scope,$http) {
    window.scrollTo(0, 0);
    $('.nav-top').removeClass('active');
    $('#download').addClass('active');
}]);
