//DOM events 

//1 Input/Select
//2 Key Up / Down

var inputValue;


// TEXT INPUT 
//var inputElement = document.querySelector('input[type="text"]');
// inputElement.onchange = function(e){
//     console.log(e.target.value);
// }
// inputElement.oninput = function(e){
//     inputValue =  e.target.value;
   
// }

//CHECKBOX INPUT
//var inputElement = document.querySelector('input[type="checkbox"]');
// inputElement.onchange = function(e){
//     console.log(e.target.checked);
// }


// SELECT INPUT
// var inputElement = document.querySelector('select');
// inputElement.onchange = function(e){
//     console.log(e.target.value);
// }


//KEY DOWN
var inputElement = document.querySelector('input[type="text"]');
inputElement.onkeydown = function(e){
    console.log(e.which);
    switch(e.which){
        case 27:
            console.log('Exit');
            break;
    }
}

// var btElement =
//     document.querySelector('button');


// btElement.onclick = function(){ 
//     btElement.style.color='#f05123'

// }