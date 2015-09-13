(function () {
    angular.module("NoteWrangler").factory("Note", function
            NoteFactory($resource, $http, $routeParams, $firebaseObject, $firebaseArray) {
        return {
            all: function () {
                var refnotes = new Firebase(notes_url);
                return $firebaseArray(refnotes);

            },
            view: function () {
                var refnote = new Firebase(notes_url);
                return current_note = $firebaseObject(refnote.child($routeParams.id));

            },
            create: function (note) {
                return $http({'method': 'POST', url: 'http://localhost:3000/notes', data: note});
            },
        }

//        return $resource("http://localhost:3000/notes/:id",{id:'@_id',format:'json'},{
//            update:{
//                method: 'PUT'
//            }
//        });
    })


})();
