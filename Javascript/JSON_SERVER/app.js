// var courseApi ='http://localhost:3000/courses'


// fetch(courseApi)

//     .then(function(response){
//         return response.json();
//     })
//     .then(function(courses){
//         console.log(courses);
//     })





var courseApi = 'http://localhost:3000/courses';


function start(){
    // getCourses(function(courses){
    //     console.log(courses);
    // })
    getCourses(renderCourse);


    handleCreateForm();
}

function createCourse(data){
    var options ={
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
        body: JSON.stringify(data)
    };


    fetch(courseApi,options)
        .then(function(response){
            response.json();

        }) 
       
        .then(callback);

}
function handleDeleteCourse (id){
    var options ={
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
        
    };


    fetch(courseApi + '/' + id,options)
        .then(function(response){
            response.json();

        }) 
      
        .then(function(){
            var courseItem = document.querySelector('.course-item-'+id);
            if(courseItem){
                courseItem.remove();
            }
        
        });
        
}
start();


function getCourses(callback){
    fetch(courseApi)
        .then(function(response){

            return response.json();
        })
        .then(callback);

}

function renderCourse(courses){
    var listCoursesBlock = 
    document.querySelector('#list-courses');
    

    var htmls = courses.map(function(course){
        return `
            <li class="course-item-${course.id}">
                <h4>${course.name}</h4>
                <p>${course.description}</p>
                <button onclick="handleDeleteCourse(${course.id})">Delete</button>
            </li>
        
        `


    })

    listCoursesBlock.innerHTML = htmls.join('');


}
function handleCreateForm(){
    var createBtn = document.querySelector('#create')

    createBtn.onclick = function(){
        var name = document.querySelector('input[name="name"]').value;
       var description = document.querySelector('input[name="description"]').value;
        console.log(description);

        var formData ={
            name: name,
            description:description
        }

        createCourse(formData);
    } 

}

