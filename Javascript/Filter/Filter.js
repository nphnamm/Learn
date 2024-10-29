
Array.prototype.filter2 = function(callback){
    var output = [];

    for(var index in this){
        if(this.hasOwnProperty(index)){
            var result = callback(this[index], index , this);
            console.log(result);
            if (result) {
                output.push(this[index]);
            }
        }
    }
    return output;
}

var courses = [
    {
        name:'Javascript',
        coin :680
    },
    {
        name:'PHP',
        coin :850
    },
    {
        name:'Ruby',
        coin :960
    }
    
   
];

var filterCourses = courses.filter2(function(course, index, array){
   
    if(course.coin > 700){
        console.log(course);
    } 
    return course.coin > 700;
});
console.log(filterCourses);



