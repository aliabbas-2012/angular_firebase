(function () {
    angular.module("NoteWrangler").directive('nwCategorySelect', function (Category) {
        return {
            ristrict: 'E',
            templateUrl: 'templates/directives/nw-category-select.html',
            replace: true,
            scope: {
                activeCategory: "="
            },
            link: function (scope, element, attrs) {

                scope.categories = Category.query();
            },
            //for setting active category
            controller: function ($scope) {
                this.setActiveCategory = function (category) {
                    $scope.activeCategory = category.name;
                }

                this.getActiveCategory = function () {

                    return $scope.activeCategory;
                }

                return this;
            }
        }
    })


})();
