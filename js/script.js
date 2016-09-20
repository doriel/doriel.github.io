var myApp = angular.module('myApp', ['ngRoute']);
myApp.config(function($routeProvider) {
  $routeProvider
  .when('/', {
      templateUrl : 'vista/index.html',
  })

  .when('/sobre', {
      templateUrl : 'vista/sobre.html',
  })

  .when('/projectos', {
      templateUrl : 'vista/projectos.html',
  })

  .when('/contacto', {
      templateUrl : 'vista/contacto.html',
  });
});


