(function () {
    angular.module("NoteWrangler").factory("Category", function CategoryFactory($resource) {
//        return {
//            all: function () {
//                return $http({'method': 'Get', url: 'http://localhost:3000/category.json'});
//            },
//            view:function(){
//               return $http({'method':'Get',url:'http://localhost:3000/category/'+$routeParams.id+'.json'});
//            },
//            create: function (note) {
//                return $http({'method': 'POST', url: 'http://localhost:3000/category',data: note});
//            },
//            
//        }
        
        return $resource("http://localhost:3000/categories/:id?format=json",{},{
            update:{
                method: 'PUT'
            }
        });
    })


})();
