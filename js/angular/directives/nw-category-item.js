(function () {
    angular.module("NoteWrangler").directive('nwCategoryItem', function () {
        return {
            ristrict: 'E',
            templateUrl: 'templates/directives/nw-category-item.html',
            scope: {
                category: '='
            },
            require: '^nwCategorySelect',
            link: function (scope, element, attrs, nwCategorySelectCtrl) {
                scope.make_active = function () {
                    
                    nwCategorySelectCtrl.setActiveCategory(scope.category);
                }
                scope.category_active = function () {

                    return nwCategorySelectCtrl.getActiveCategory() == scope.category.name;
                }
            }

        }
    })


})();
