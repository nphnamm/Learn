
Array.prototype.some2 = function(callback){
    var output =false;
    for( var index in this){
        if(this.hasOwnProperty(index)){

            if(callback(this[index], index, this)){
                output =true;
                break;
            };

        }
    }
    return output;

}
var courses = [
    {
        name:'Javascript',
        coin :680,
        isFinish:false,

    },
    {
        name:'PHP',
        coin :850,
        isFinish:false,

    },
    {
        name:'Ruby',
        coin :960,
        isFinish:false,

    }
];
var result = courses.some2(function(course, index, array){
    return course.isFinish === true;

});

console.log(result);