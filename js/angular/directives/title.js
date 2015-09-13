(function () {
    angular.module("NoteWrangler").directive('title', function ($timeout) {

        return {
            ristrict: 'A',
            link: function (scope, element) {
                $timeout(function () {
                    $(element).tooltip({container: 'body'});
                });


            }
        }
    })


})();
