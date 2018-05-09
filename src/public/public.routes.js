(function(){
    'use strict';

    angular.module('public')
           .config(routeConfig);

    //Configure the routes and views
    routeConfig.$inject = ['$stateProvider'];
    function routeConfig($stateProvider){
        //Routes
        $stateProvider
            .state('public',{
                abstract: true,//abstract is used for not allowing to go diectly to state i.e. public
                templateUrl:'src/public/public.html'//parent template
            })
            .state('public.home',{
                url:'/',
                templateUrl:'src/public/home/home.html'//child template
            })
            .state('public.menu',{
                url:'/menu',
                templateUrl:'src/public/menu/menu.html',
                controller: 'MenuController',
                controllerAs: 'menuCtrl',
                resolve:{
                    menuCategories: ['MenuService',function(MenuService){
                    return MenuService.getCategories();
                }]  
                }
            })
            .state('public.menuitems',{
                url: '/menu/{category}',
                templateUrl: 'src/public/menu-items/menu-items.html',
                controller: 'MenuItemsController',
                controllerAs: 'menuItemsCtrl',
                resolve:{
                    menuItems: ['$stateParams','MenuService', function($stateParams, MenuService){
                        return MenuService.getMenuItems($stateParams.category);
                    }]
                }
            });
    }
})();