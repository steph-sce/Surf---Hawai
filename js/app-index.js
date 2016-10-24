(function() {
  var app = angular.module('SurfHawai', ['ngRoute']);

  app.controller('MainController', function () {

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

  app.config(['$routeProvider',
    function ($routeProvider) {
      // Routage
      $routeProvider.when('/', {
        templateUrl: 'partials/home.html',
        controller: 'MainController'
      })
      .when('produits', {
        templateUrl: 'partials/produits.html',
        controller: 'MainController'
      })
      .when('contact', {
        templateUrl: 'partials/contact.html',
        controller: 'MainController'
      });
    }
  ]);

})();
