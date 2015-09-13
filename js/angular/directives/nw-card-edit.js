(function () {
    angular.module("NoteWrangler").directive('nwCardEdit', function () {
        var num = 1;
        return {
            ristrict: 'E',
            templateUrl: 'templates/directives/nw-card-edit.html',
            scope: {
                title: '@',
                icon: '@',
                description: '=',
                id: '=',
                $id: '=',
                image: '='
            },
      
        }
    })


})();
