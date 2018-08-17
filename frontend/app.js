var app = angular.module("app", []);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "index.html"
    })
    .when("/contato", {
        templateUrl : "contato.html"
    })
    .when("/equipe", {
        templateUrl : "equipe.html"
    })
    .when("/portfolio", {
        templateUrl : "portfolio.html"
    })
    .when("/servicos", {
        templateUrl : "servicos.html"
    })
    .when("/sobre", {
        templateUrl : "sobre.html"
    });
});