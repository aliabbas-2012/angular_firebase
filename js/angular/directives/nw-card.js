(function () {
    angular.module("NoteWrangler").directive('nwCard', function () {
        var num = 1;
        return {
            ristrict: 'E',
            templateUrl: 'templates/directives/nw-card.html',
            scope: {
                title: '@',
                icon: '@',
                description: '=',
                id: '=',
                image: '='
            },
            controller: function ($scope) {

                $scope.header = 'Note Title ' + (num++)
            },
            //no need no because we are dealing with scope
            controllerAs: 'card',
            link: function (scope, element) {
                element.on('hover',
                        function () {
                            element.find("div.card p").toggleClass("hidden");
                        }, function () {
                    element.find("div.card p").toggleClass("hidden");
                }
                );

            }
        }
    })


})();
