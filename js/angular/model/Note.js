var Notes = new function () {
    this.properties = [
        {
          "key": '$id',
         "type": 'uuid'
        },
        {
          "key": 'CategoryId',
         "type": 'int'
        },
        {
          "key": 'UserId',
         "type": 'int'
        },
        {
          "key": 'content',
         "type": 'text'
        },
        {
          "key": 'created_at',
         "type": 'date'
        },
        {
          "key": 'description',
         "type": 'text'
        },
        {
          "key": 'icon',
         "type": 'text'
        },
        {
          "key": 'id',
         "type": 'int'
        },
        {
          "key": 'link',
         "type": 'text'
        },
        {
          "key": 'title',
         "type": 'text'
        },
        {
          "key": 'updated_at',
         "type": 'date'
        },
   
    ],
    this.getProperties = function(){
        return _.filter(this.properties,function(ob){
            if(ob['type']=='text' || ob['type']=='int'){
                return ob;
            }
        });
       
    }
    this.getPropertiesKeys = function(){
       
        return _.pluck(this.getProperties(),"key");
       
    }
};
