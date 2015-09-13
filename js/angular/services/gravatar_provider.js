(function () {
    angular.module("NoteWrangler").provider("GravatarP", function GravatarProvider() {
        var avatarSize = 80;
        var avatarUrl = 'http://www.gravatar.com/avatar/';
        this.setSize = function(size){
            avatarSize = size;
        }
        this.$get = function() {
            return function(email){
                avatar_photo = avatarUrl+CryptoJS.MD5(email)+"?size="+avatarSize.toString();
              
                return avatar_photo;
            }
            
        }
    })


})();
