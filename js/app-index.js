(function() {
  var app = angular.module('SurfHawai', ['ngRoute']);

  app.controller('MainController', function () {
  

  app.controller('FormController', ['$scope',function($scope){
    $scope.master = {};
    $scope.update = function(user){
      $scope.master = angular.copy(user);
    };
    $scope.reset = function(){
      $scope.user = angular.copy($scope.master);
    };
    $scope.reset();

    
  }]);

  });

  app.directive('header', function () {
    return {
      restrict: 'A',
      templateUrl: 'partials/header.html'
    }
  });
  app.directive('footer', function () {
    return {
      restrict: 'A',
      templateUrl: 'partials/footer.html'
    }
  });

  app.config(function($routeProvider){
      $routeProvider
      
      .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'MainController'
      })
      .when('/produits', {
        templateUrl: 'partials/produits.html',
        controller: 'produitController'
      })
      .when('/contact', {
        templateUrl: 'partials/contact.html',
        controller: 'contactController'
      });
  });

})();
