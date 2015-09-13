(function () {

    angular.module("NoteWrangler").config(function ($routeProvider) {

        $routeProvider.when('/notes', {
            templateUrl: 'templates/pages/notes/index.html',
            controller: 'NotesIndexController',
            controllerAs: 'indexController'
        }).when('/users', {
            templateUrl: 'templates/pages/users/index.html',
            //controller: 'NotesIndexController',
            ///controllerAs: 'indexController'
        }).when('/', {
            templateUrl: 'templates/pages/notes/index.html',
            controller: 'NotesIndexController',
            controllerAs: 'indexController'
        }).when('/notes/:id', {
            templateUrl: 'templates/pages/notes/show.html',
            controller: 'NotesShowController',
            controllerAs: 'showController'
        }).when('/notes/new', {
            templateUrl: 'templates/pages/notes/edit.html',
            controller: 'NotesCreateController'
        }).when('/notes/:id/edit', {
            templateUrl: 'templates/pages/notes/edit.html',
            controller: 'NotesEditController'
        }).otherwise({redirectTo: '/'})
    })

})();
