
var courses = [
     { 
         id :1,
         name: 'Javascript',
         coin:100
     },
     { 
        id :2,
        name: 'HTML, CSS',
        coin:200
    },
    { 
        id :3,
        name: 'Python',
        coin:220
    },
    { 
        id :4,
        name: 'Ruby',
        coin:200
    },
    { 
        id :5,
        name: 'PHP',
        coin:480
    },

];
// var totalCoin = courses.reduce(function(total, course){
//     return total + course.coin;

// }, 0);
// console.log(totalCoin);

// var numbers =[100, 200, 220, 200, 480];

// var totalCoin = numbers.reduce(function(total, number){
//     return total + number;

// }, 0);
// console.log(totalCoin);


// Flat - "Làm phảng "Mảng từ Depth Array 
var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];

var flatArray = depthArray.reduce(function(flatOutput, depthItem){
    return flatOutput.concat(depthItem);


}, []);

// console.log(flatArray);
var topics = [
    {
        topic: "Front-end",
        courses: [
            {
                id: 1,
                title: "HTML, CSS"
            },
            {
                id:2,
                title: "Javascript"
            }
        ]
    },
    {
        topic: "Back-end",
        courses: [
            {
                id: 1,
                title: "PHP"
            },
            {
                id:2,
                title: "NodeJS"
            }
        ]
    },
];
// var newCourses = topics.reduce(function (courses, topic){
//     return courses.concat(topic.courses);

// }, []);
//  console.log(newCourses);
//  var htmls = newCourses.map(function(course){
//      return `
//      <div>
//         <h2> ${course.title} </h2>
//         <p>ID: ${course.id} </p>
//      </div>
//      `
//  });
//  console.log(htmls.join(''));
Array.prototype.reduce2 = function (callback, result)
 { 
    let i =0;
    if(arguments.length < 2){
        i=1; 
        result = this[0];
    }
    for(;i < this.length; i++){

       result = callback(result, this[i], i , this);
        console.log(typeof callback);
    }
    return result;
}
const numbers =[1,2,3,4,5]

const result = numbers.reduce2((total, number) =>{
    return total + number;
},0)
console.log(result);