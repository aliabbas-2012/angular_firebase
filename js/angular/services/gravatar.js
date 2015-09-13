(function () {
    angular.module("NoteWrangler").factory("Gravatar", function GravatarFactory($http,$routeParams) {
        var avatarSize = 80;
        var avatarUrl = 'http://www.gravatar.com/avatar/';
        return {
            generate:function(email){
                return avatarUrl+CryptoJS.MD5(email)+"?size="+avatarSize.toString();
            }
            
        }
    })


})();
