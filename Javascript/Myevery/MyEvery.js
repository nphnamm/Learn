
Array.prototype.every2 = function(callback){
    var output =true;
    for( var index in this){
        if(this.hasOwnProperty(index)){

           var result = callback(this[index], index,this);
           if(!result){
               output=false;
               break;
           }

        }
    }
    return output;

}
var courses = [
    {
        name:'Javascript',
        coin :680,
        isFinish:true,

    },
    {
        name:'PHP',
        coin :850,
        isFinish:false,

    },
    {
        name:'Ruby',
        coin :960,
        isFinish:true,

    }
];
var result = courses.every2(function(course, index, array){
    return course.isFinish;

});

console.log(result);