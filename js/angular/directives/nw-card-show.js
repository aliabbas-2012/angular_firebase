(function () {
    angular.module("NoteWrangler").directive('nwCardShow', function () {
        var num = 1;
        return {
            ristrict: 'E',
            templateUrl: 'templates/directives/nw-card-show.html',
            scope: {
                title: '@',
                icon: '@',
                description: '=',
                id: '=',
                image: '='
            },
    
        }
    })


})();
