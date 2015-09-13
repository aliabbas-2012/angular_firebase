(function () {
    angular.module('NoteWrangler').controller('NotesEditController',
            function ($scope, $routeParams, Note, $firebaseObject, $firebaseArray) {

                $scope.current_note = Note.view();
                $scope.current_note.$bindTo($scope, "data").then(function () {
                    $scope.note = $scope.data;


                });
                $scope.note = $scope.current_note = Note.view();

                console.log(($scope.note));

                $scope.updateNote = function (note) {
                    console.log($scope.current_note);
                    fields = Notes.getPropertiesKeys();
//                    note_updated = {};;
//                    $.each(note, function (k, v) {
//                        if (_.contains(fields, k)) {
//                            note_updated[k] = v;
//                        }
//                    })
                    $scope.updating = true;
                    $scope.current_note.$save().then(function (ref) {
                        $scope.updating = false;
                    }, function (error) {
                        console.log("Error:", error);
                    });

                    $scope.errors = null;


                };
            });
})();

