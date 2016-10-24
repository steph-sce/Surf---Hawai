(function() {
  var app = angular.module('SurfHawai', ['ngRoute']);

  app.controller('MainController', function () {

  });

  app.controller('FormController', ['$scope',function($scope){
    $scope.master = {};
    $scope.update = function(user){
      $scope.master = angular.copy(user);
    };
    $scope.reset = function(){
      $scope.user = angular.copy($scope.master);
    };
    $scope.reset();


    this.send = function () {
      alert('Message envoyé !');
    };

  }]);

  app.controller('ProduitsController', function(){
    this.products = object;
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
        controller: 'ProduitsController'
      })
      .when('/contact', {
        templateUrl: 'partials/contact.html',
        controller: 'FormController'
      });
  });

var object = [

{
  image: "img/top-bikini-triangle-noir-blanc-billabong.jpg",
  titre: "Maillots Femmes",
  content: "Les mailots qui vous rendent jolie et sportive miam vous serez à croquer là dedans FETCH ++ -ALL."
},
{
  image: "img/25530750-Surfer-plage-mode-de-vie-des-gens-homme-surf-fonctionnant-avec-de-bodyboard-dans-l-eau-sur-la-plage--Banque-d'images.jpg",
  titre: "Maillot Hommes",
  content: "Vous allez faire craquer Madame avec votre grosse... planche"
},
{
  image: "img/surfboard-design-1.jpg",
  titre: "Planche de SURF",
  content: "SurfBoard ceci est une plache ++++ WAOUH, essayer c'est l'adopter"
},
{
  image: "img/collapsible_surf2-gi.jpg",
  titre: "Accessoires planche de SURF",
  content: "Accessoires"
},
{
  image: "img/cours.png",
  titre: "Cours",
  content: "Cours de SURF"
},
{
  image: "img/surf-cream__71143.1457479031.jpg",
  titre: "Produit",
  content: "Produit d'entretien"
}
];

})();
