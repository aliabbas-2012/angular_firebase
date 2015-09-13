(function () {
    angular.module("NoteWrangler").controller('NotesIndexController',
            function ($scope, Note, GravatarP, $firebaseObject, $firebaseArray) {
                var controller = this;

                var refnotes = new Firebase(notes_url);
                $scope.notes = $firebaseArray(refnotes);

                $scope.notes = Note.all();
                controller.notes =  $scope.notes;
                console.log($scope.notes);
                $scope.gravatarUrl = function (email) {

                    return GravatarP(email);
                }

            })


})();
