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
<<<<<<< HEAD
  app.directive('footer', function () {
=======

   app.directive('footer', function () {
>>>>>>> ef99924d90b74a0191e25c97726fe34e91fecefa
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
<<<<<<< HEAD
      .when('produits.html', {
        templateUrl: 'partials/produits.html',
        controller: 'MainController'
      })
      .when('contact.html', {
=======
      .when('produits', {
        templateUrl: 'partials/produits.html',
        controller: 'MainController'
      })
      .when('contact', {
>>>>>>> ef99924d90b74a0191e25c97726fe34e91fecefa
        templateUrl: 'partials/contact.html',
        controller: 'MainController'
      });
    }
  ]);

})();
<<<<<<< HEAD
=======


        
>>>>>>> ef99924d90b74a0191e25c97726fe34e91fecefa
