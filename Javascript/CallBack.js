

Array.prototype.map2 = function(callback){
    var output =[];
    var arrayLength = this.length;

    for (var i=0 ;i< arrayLength; ++i){
        var result = callback(this[i],i);

        output.push(result);
    }
    return output;
}
var  courses = [
    'Javascript',
    'PHP',
    'Ruby'
];
// var htmls= courses.map(function(course){
//     return `<h2>${course} </h2>`

// });

// console.log(htmls.join(''));
var htmls = courses.map2(function(course,index){
    return `<h2> ${course} </h2>`;
})
console.log(htmls.join(''));