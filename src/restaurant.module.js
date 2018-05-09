(function(){
"use strict";

// Reataurant modoule includes that which require by  the public module as dependency
//Importing public module as dependency
angular.module('restaurant', ['public'])
       .config(config);
       
config.$inject = ['$urlRouterProvider'];//To protect from minimization
function config($urlRouterProvider){
    // If user goes to a path that doesn't exist, redirect to public root
    $urlRouterProvider.otherwise('/');
}

})();