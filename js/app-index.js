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
      .when('produits.html', {
        templateUrl: 'partials/produits.html',
        controller: 'MainController'
      })
      .when('contact.html', {
        templateUrl: 'partials/contact.html',
        controller: 'MainController'
      });
    }
  ]);

})();


        
