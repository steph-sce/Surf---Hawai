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

  app.config(function($routeProvider){
      $routeProvider
      // Routage
      $routeProvider.when('/', {
        templateUrl: 'partials/home.html',
        controller: 'MainController'
      })
<<<<<<< HEAD
<<<<<<< HEAD
      .when('produits.html', {
=======
      .when('/produits', {
>>>>>>> 1e59330e058fc6f2bb3235ae35491a28dab40054
        templateUrl: 'partials/produits.html',
        controller: 'produitController'
      })
<<<<<<< HEAD
      .when('contact.html', {
=======
      .when('produits', {
        templateUrl: 'partials/produits.html',
        controller: 'MainController'
      })
      .when('contact', {
>>>>>>> ef99924d90b74a0191e25c97726fe34e91fecefa
=======
      .when('/contact', {
>>>>>>> 1e59330e058fc6f2bb3235ae35491a28dab40054
        templateUrl: 'partials/contact.html',
        controller: 'contactController'
      });
  });

})();
<<<<<<< HEAD
=======


        
>>>>>>> ef99924d90b74a0191e25c97726fe34e91fecefa
