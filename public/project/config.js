(function(){
    angular
        .module("ProjectApp")
        .config(Config);

    function Config($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "views/index-temp.html"
            })
            .when("/login", {
                templateUrl: "views/user/login.view.client.html",
                controller: "LoginController",
                controllerAs: "model"
            })
            .when("/register", {
                templateUrl: "views/user/register.view.client.html",
                controller: "RegisterController",
                controllerAs: "model"
            })
            .when("/profile/:id", {
                templateUrl: "views/user/profile.view.client.html",
                controller: "ProfileController",
                controllerAs: "model"
            })
            .when("/home/:id", {
                templateUrl: "views/user/home.view.client.html",
                controller: "HomeController",
                controllerAs: "model"
            })
            .when("/mylist/:id", {
                templateUrl: "views/user/mylist.view.client.html",
                controller: "MylistController",
                controllerAs: "model"
            })
            .when("/team/league_chooser/:id", {
                templateUrl: "views/team/league_chooser.view.client.html",
                controller: "LeagueController",
                controllerAs: "model"
            })
            .when("/teamlist/:league", {
                templateUrl: "views/team/team_list.view.client.html",
                controller: "TeamListController",
                controllerAs: "model"
            })
            .when("/playerlist/", {
                templateUrl: "views/player/player_list.view.client.html",
                controller: "PlayerController",
                controllerAs: "model"
            })
            .when("/teamplayers/:code", {
                templateUrl: "views/team/team_players.view.client.html",
                controller: "TeamPlayersController",
                controllerAs: "model"
            })
            .otherwise({
                redirectTo: "/"
            });
    }
})();