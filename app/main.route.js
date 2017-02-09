/**
 * Created by edwin on 8/2/17.
 */

import LoginController from './login/login.controller';

export default function routeConfig($routeProvider, $locationProvider){
    $locationProvider.hashPrefix("");
    $routeProvider
        .when("/login",{
            templateUrl: 'app/login/login.template.html',
            controller: LoginController,
            controllerAs: "login"
        })
        .otherwise({
            redirectTo: "/login"
        });
}

routeConfig.$inject = ['$routeProvider','$locationProvider'];