(function () {
    angular.module("NoteWrangler").controller('NotesShowController', function ($scope, Note, Gravatar,$routeParams) {
        var controller = this;
        console.log(Note);
//        Note.view().success(function (data) {
//            controller.note = data;
//
//
//        })
        controller.note = Note.get({id: $routeParams.id});

        $scope.gravatarUrl = function (email) {
            return Gravatar.generate(email);
        }
    })


})();
